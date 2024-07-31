import React from "react";

type Color = "primary" | "transparent";

type ButtonProps = {
	children: React.ReactNode;
	onClick: () => void;
	color?: Color;
	size?: "small" | "medium" | "large" | "full" | "fit";
	/**
	 * Custom class name to be added to the button. This will override the color and size props.
	 */
	customClassName?: string;
};

const Button = ({
	children,
	onClick,
	color = "primary",
	size = "fit",
	customClassName,
}: ButtonProps) => {
	let className = "rounded font-bold";

	switch (color) {
		case "primary":
			className +=
				" px-4 py-2 bg-primary-0 hover:bg-primary-50 text-white";
			break;
		case "transparent":
			className += " bg-transparent text-primary-0";
			break;
		default:
			break;
	}

	switch (size) {
		case "small":
			className += " text-sm";
			break;
		case "medium":
			className += " text-md";
			break;
		case "large":
			className += " text-lg";
			break;
		case "full":
			className += " w-full h-full";
			break;
		case "fit":
			className += " w-fit h-fit";
			break;
		default:
			break;
	}

	return (
		<button
			className={!customClassName ? className : customClassName}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
