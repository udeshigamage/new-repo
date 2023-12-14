import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";

import { AppRoutes } from "./AppRoutes";

export const SideBarData = {
    admin : [
        { Title : "List Customers",     Path : AppRoutes.customer.list.path,    Icon : <IoIcons.IoIosList />       },
        { Title : "Add Customer",       Path : AppRoutes.customer.add.path,     Icon : <FaIcons.FaUserPlus />      },
        { Title : "List Projects",      Path : AppRoutes.project.list.path,     Icon : <IoIcons.IoIosList />       },
        { Title : "Add Project",        Path : AppRoutes.project.add.path,      Icon : <AiIcons.AiFillProject />   },
        { Title : "List Vendors",       Path : AppRoutes.vendor.list.path,      Icon : <IoIcons.IoIosList />       },
        { Title : "Add Vendor",         Path : AppRoutes.vendor.add.path,       Icon : <FaIcons.FaUserPlus />      },
        { Title : "List Vendor Items",  Path : AppRoutes.vendorItem.list.path,  Icon : <IoIcons.IoIosList />       },
        { Title : "Add Vendor Item",    Path : AppRoutes.vendorItem.add.path,   Icon : <FaIcons.FaUserPlus />      },
        { Title : "List Users",         Path : AppRoutes.systemUser.list.path,  Icon : <IoIcons.IoIosList />       },
        { Title : "Add User",           Path : AppRoutes.systemUser.add.path,   Icon : <FaIcons.FaUserPlus />      },

    ]  
};