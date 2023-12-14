import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HttpCommon from "../../common/HttpCommon";
import SearchBar from "../../components/SearchBar/SearchBar";
import ListTable from "../../components/ListTable/ListTable";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import PageHeader from "../../components/PageHeader/PageHeader";
import Layout from "../../components/Layout/Layout";
import TableFacade from "../../components/TableFacade/TableFacade";

import { AppRoutes } from "../../data/AppRoutes";

import * as MdIcons from "react-icons/md";

import "./ListUser.css";

export default function ListUser() {

    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    const navigate = useNavigate();

    function fetchUsers() {
        HttpCommon.get("/users")
        .then((res) => {
            setAllUsers(res.data);  
            setUsers(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }

    function onSearch(e) {
        // Normally we need to make make request to the api. This is just a hack to show the concept of search.
        let result =  allUsers.filter((user) => {
            return user.name.toLowerCase().includes(e.target.value.toLowerCase())
        });
        setUsers(result)
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Layout>
            <PageHeader title="List Users" />
            <SearchBar onSearch={onSearch} placeHolder="name" />
            {/* <ListTable columns={["id", "name", "email", "phone"]} data={users} onRowClick={(row) => navigate(AppRoutes.systemUser.view.path.split(':')[0] + row.id) } /> */}
            {/* <DataTable
                columns={[
                    {name: "Id", selector: "id", sortable:true},
                    {name: "Name", selector: "name", sortable:true},
                    {name: "Email", selector: "email", sortable:true},
                    {name: "Contact Number", selector: "phone", sortable:true},
                ]}
                data={users}
                pagination
                highlightOnHover
                responsive
                paginationPerPage={7}
                paginationRowsPerPageOptions={[5,10,20,25,30]} 
                onRowClicked={(row) => navigate(AppRoutes.systemUser.view.path.split(':')[0] + row.id)}
            /> */}

            <TableFacade
                columns={[
                    {name: "Id", selector: "id", sortable:true},
                    {name: "Name", selector: "name", sortable:true},
                    {name: "Email", selector: "email", sortable:true},
                    {name: "Contact Number", selector: "phone", sortable:true},
                ]}
                data={users}
                onRowClicked={(row) => navigate(AppRoutes.systemUser.view.path.split(':')[0] + row.id)}
            />

            <div className="page-list-add-button">
                <FloatingButton  onClick={() => {navigate(AppRoutes.systemUser.add.path)}}>
                    <MdIcons.MdAdd />
                </FloatingButton>       
            </div>     
       </Layout>
    );
}