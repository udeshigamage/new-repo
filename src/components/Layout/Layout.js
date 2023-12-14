import React from "react";

import "./Layout.css";

export default function Layout({ children, style, itemStyles = undefined }) {
    return (
        <div className="layout" style={style}>
            {
                children.map((child, index) => {
                    return (
                        <div key={index} className="layout-item" style={itemStyles && itemStyles.name == child.name ? itemStyles.style : undefined}>
                            {child}
                        </div>
                    );
                })
            }
        </div>
    );
}