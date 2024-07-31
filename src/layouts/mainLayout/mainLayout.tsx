import React from "react";
import "./mainLayout.css";
import logo from "../../assets/images/logo.svg";
import { useNavigation } from "react-router-dom";
import NavigationTopBar, {
	NavigationTopBarHeight,
} from "../../components/navigationTopBar";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const navigation = useNavigation();

	return (
		<div className="main-layout">
			<header className="main-header">
				<>
					<NavigationTopBar />
					<div
						className={"absolute flex flex-col"}
						style={{ top: `${NavigationTopBarHeight}px` }}
					>
						{navigation.state === "loading" ? (
							<div className={"flex flex-col items-center gap-8"}>
								<img
									src={logo}
									className="App-logo"
									alt="logo"
								/>
							</div>
						) : (
							<>{children}</>
						)}
					</div>
				</>
			</header>
		</div>
	);
}
