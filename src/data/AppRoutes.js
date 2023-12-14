import React from 'react';

import ListUser from '../pages/SystemUser/ListUser';
import AddUser from '../pages/SystemUser/AddUser';
import ViewUser from '../pages/SystemUser/ViewUser';

export const AppRoutes = {
    customer : {
        list : {
            path : "/customer/list",
            // component : React.lazy(() => import("../pages/Customer/ListCustomer")),
        },
        add : {
            path : "/customer/add",
            // component : React.lazy(() => import("../pages/Customer/AddCustomer")),
        },
        edit : {
            path : "/customer/edit/:id",
            // component : React.lazy(() => import("../components/Customer/EditCustomer/EditCustomer")),
        },
        delete : {
            path : "/customer/delete/:id",
            // component : React.lazy(() => import("../components/Customer/DeleteCustomer/DeleteCustomer")),
        },
    },

    project : {
        list : {
            path : "/project/list",
            // component : React.lazy(() => import("../components/Project/ListProject/ListProject")),
        },
        add : {
            path : "/project/add",
            // component : React.lazy(() => import("../components/Project/AddProject/AddProject")),
        },
        edit : {
            path : "/project/edit/:id",
            // component : React.lazy(() => import("../components/Project/EditProject/EditProject")),
        },
        delete : {
            path : "/project/delete/:id",
            // component : React.lazy(() => import("../components/Project/DeleteProject/DeleteProject")),
        },
    },

    vendor : {
        list : {
            path : "/vendor/list",
            // component : React.lazy(() => import("../components/Vendor/ListVendor/ListVendor")),
        },
        add : {
            path : "/vendor/add",
            // component : React.lazy(() => import("../components/Vendor/AddVendor/AddVendor")),
        },
        edit : {
            path : "/vendor/edit/:id",
            // component : React.lazy(() => import("../components/Vendor/EditVendor/EditVendor")),
        },
        delete : {
            path : "/vendor/delete/:id",
            // component : React.lazy(() => import("../components/Vendor/DeleteVendor/DeleteVendor")),
        },
    },

    vendorItem : {
        list : {
            path : "/vendor/item/list",
            // component : React.lazy(() => import("../components/VendorItem/ListVendorItem/ListVendorItem")),
        },
        add : {
            path : "/vendor/item/add",
            // component : React.lazy(() => import("../components/VendorItem/AddVendorItem/AddVendorItem")),
        },
        edit : {
            path : "/vendor/item/edit/:id",
            // component : React.lazy(() => import("../components/VendorItem/EditVendorItem/EditVendorItem")),
        },
        delete : {
            path : "/vendor/item/delete/:id",
            // component : React.lazy(() => import("../components/VendorItem/DeleteVendorItem/DeleteVendorItem")),
        },
    },

    systemUser : {
        list : {
            path : "/user/list",
            component : <ListUser />,
        },
        view : {
            path : "/user/view/:id",
            component : <ViewUser />,
        },
        add : {
            path : "/user/add",
            component : <AddUser />,
        },
        edit : {
            path : "/user/edit/:id",
            // component : React.lazy(() => import("../components/SystemUser/EditSystemUser/EditSystemUser")),
        },
        delete : {
            path : "/user/delete/:id",
            // component : React.lazy(() => import("../components/SystemUser/DeleteSystemUser/DeleteSystemUser")),
        },
    }
}
