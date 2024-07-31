import React from "react";
import "./home.css";
import MainLayout from "../../layouts/mainLayout/mainLayout";
import Carousel, { CarouselImageProps } from "../../components/carousel";

const importAll = (
	r: __WebpackModuleApi.RequireContext,
): CarouselImageProps[] => {
	const importedImages = r.keys().map((key) => ({
		src: r(key),
		alt: key.replace("./", "").replace(/\.\w+$/, ""),
	}));

	// Use a Set to filter out duplicate images
	const uniqueImages = Array.from(
		new Set(importedImages.map((image) => image.src)),
	).map((src) => importedImages.find((image) => image.src === src));

	return uniqueImages as CarouselImageProps[];
};

const images = importAll(
	require.context(
		"../../assets/images/carousel",
		false,
		/\.(png|jpe?g|svg)$/,
	),
);

function Home() {
	return (
		<MainLayout>
			<Carousel images={images} />
		</MainLayout>
	);
}

export default Home;
