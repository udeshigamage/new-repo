import React from "react";

import "./FloatingButton.css";

export default function FloatingButton({ children, onClick }) {
    return (
        <button className="floating-button" onClick={onClick}>
            {children}
        </button>
    );
}