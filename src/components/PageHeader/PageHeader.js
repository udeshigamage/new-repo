import React from "react";

import FloatingButton from "../FloatingButton/FloatingButton";

import * as RiIcons from "react-icons/ri";

import "./PageHeader.css";

export default function PageHeader({ title, goBackEnabled = false, onGoBack = () => {} }) {
    return (
        <div className="page-header">
            {goBackEnabled && (
                <div className="page-header-goback-button">
                    <FloatingButton onClick={onGoBack}>
                        <RiIcons.RiArrowGoBackFill />
                    </FloatingButton>
                </div>
            )}
            <h1 className="page-header-title">{title}</h1>
        </div>
    );
}