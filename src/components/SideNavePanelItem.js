import React from "react";

const SideNavePanelItem = (props) => {
    return (
        <div className='side-bar-item'>
            {props.itemName}
            <div className='side-bar-item-sub-container'>
                {props.children}
            </div>
        </div>
    );
}

export default SideNavePanelItem;