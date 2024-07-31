import React from "react";
import ArrowLeft from "./arrow-left.svg";
import ArrowRight from "./arrow-right.svg";

//<editor-fold desc="Defaults & Types">
type IconProps = {
	width?: number;
	height?: number;
	className?: string;
};

type DefaultIconProps = {
	src: string;
	alt: string;
	iconProps?: IconProps;
};

function DefaultIcon({ src, alt, iconProps }: DefaultIconProps) {
	const { width, height, className } = iconProps || {};
	if (!width && !height) {
		return <img src={src} alt={alt} />;
	}
	return (
		<img
			src={src}
			alt={alt}
			width={!width ? "auto" : width}
			height={!height ? "auto" : height}
			className={className}
		/>
	);
}
//</editor-fold>

export function ArrowLeftIcon({ width, height, className }: IconProps) {
	return (
		<DefaultIcon
			src={ArrowLeft}
			alt="Arrow Left"
			iconProps={{ width, height, className }}
		/>
	);
}

export function ArrowRightIcon({ width, height, className }: IconProps) {
	return (
		<DefaultIcon
			src={ArrowRight}
			alt="Arrow Right"
			iconProps={{ width, height, className }}
		/>
	);
}
