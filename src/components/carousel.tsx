import React, { CSSProperties, useEffect, useState } from "react";
import Button from "./button";
import { ArrowLeftIcon, ArrowRightIcon } from "../assets/icons/icons";
import { NavigationTopBarHeight } from "./navigationTopBar";

export type CarouselImageProps = {
	src: string;
	alt: string;
};

type CarouselProps = {
	images: CarouselImageProps[];
};

const Carousel = ({ images }: CarouselProps) => {
	const [position, setPosition] = useState(0);
	const [onDisplay, setOnDisplay] = useState(1);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			setWindowHeight(window.innerHeight);
			setPosition(-window.innerWidth * (onDisplay - 1));
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [onDisplay]);

	const moveRight = () => {
		if (onDisplay === images.length) {
			setPosition(0);
			setOnDisplay(1);
		} else {
			setPosition(position - windowWidth);
			setOnDisplay(onDisplay + 1);
		}
	};

	const moveLeft = () => {
		if (onDisplay === 1) {
			setPosition(-windowWidth * (images.length - 1));
			setOnDisplay(images.length);
		} else {
			setPosition(position + windowWidth);
			setOnDisplay(onDisplay - 1);
		}
	};

	const imageStyle: CSSProperties = {
		height: "100%",
		maxHeight: `${windowHeight - NavigationTopBarHeight}px`,
		objectFit: "cover",
		objectPosition: "center",
		width: `${windowWidth}px`,
		transform: `translateX(${position}px)`,
		transition: "all 0.5s",
	};

	return (
		<div id={"carousel"}>
			<div className={"flex overflow-hidden"}>
				{images.map((image, index) => (
					<img
						key={index}
						src={image.src}
						alt={image.alt}
						className={"shrink-0"}
						style={imageStyle}
					/>
				))}
			</div>
			<div
				className={
					"absolute top-0 flex h-full w-full items-center justify-between"
				}
			>
				<div className={"z-10"}>
					<Button onClick={moveLeft} color={"transparent"}>
						<ArrowLeftIcon
							width={50}
							height={50}
							className={"mx-5 drop-shadow-lg"}
						/>
					</Button>
				</div>
				<div
					className={
						"absolute bottom-0 mb-5 flex h-full w-full items-end justify-center"
					}
				>
					{images.map((_, index) => (
						<div
							key={index}
							onClick={() => {
								setPosition(-windowWidth * index);
								setOnDisplay(index + 1);
							}}
							className={`mx-2 h-3 w-3 cursor-pointer rounded-full ${
								onDisplay === index + 1
									? "bg-primary-200"
									: "bg-primary-0"
							}`}
						/>
					))}
				</div>
				<div className={"z-10"}>
					<Button onClick={moveRight} color={"transparent"}>
						<ArrowRightIcon
							width={50}
							height={50}
							className={"mx-5 drop-shadow-lg"}
						/>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
