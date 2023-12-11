import React from "react";
import "../css/SideNavPanel.css";

export function SideNavPanelSubItem({children}) {
    return (
        <div className="sidenav-panel-item-sub">
            {children}
        </div>
    );
}

export function SideNavPanelItem({children, title, icon}) {
    return (
        <div className="sidenav-panel-item">
            <div className="sidenav-panel-item-title">
                <i className="material-icons">{icon}</i>
                <span>{title}</span>
            </div>
            <div className="sidenav-panel-item-sub-container">
                {children}
            </div>
        </div>
    );
}

export default function SideNavPanel({children}) {
    return (
        <div className="sidenav-panel">
            {children}
        </div>
    );
}