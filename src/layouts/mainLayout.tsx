import React from "react";
import "./mainLayout.css";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="main-layout">
            <header className="main-header">
                {children}
            </header>
        </div>
    );
}