import React from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import "./components.css";

export const NavigationTopBarHeight = 90;

const NavigationTopBar = () => {
	return (
		<div className="top-menu fixed top-0 z-50 flex w-dvw items-center gap-5">
			<div className={"flex items-center gap-2 text-xs"}>
				<img src={logo} className={"w-16"} alt="logo" />
				Greenlash games
			</div>
			<nav>
				<ul className="flex gap-5">
					<li>
						<NavLink
							to={"/"}
							className={({ isActive, isPending }) =>
								isActive
									? "link-active"
									: isPending
										? "link-pending"
										: "link-inactive"
							}
						>
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"games"}
							className={({ isActive, isPending }) =>
								isActive
									? "link-active"
									: isPending
										? "link-pending"
										: "link-inactive"
							}
						>
							Juegos
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"about-us"}
							className={({ isActive, isPending }) =>
								isActive
									? "link-active"
									: isPending
										? "link-pending"
										: "link-inactive"
							}
						>
							Conocenos
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"contact"}
							className={({ isActive, isPending }) =>
								isActive
									? "link-active"
									: isPending
										? "link-pending"
										: "link-inactive"
							}
						>
							Contacto
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavigationTopBar;
