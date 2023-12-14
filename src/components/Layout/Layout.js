import React from "react";

import "./Layout.css";

export default function Layout({ children }) {
    return (
        <div className="layout">
            {
                children.map((child, index) => {
                    return (
                        <div key={index} className="layout-item">
                            {child}
                        </div>
                    );
                })
            }
        </div>
    );
}