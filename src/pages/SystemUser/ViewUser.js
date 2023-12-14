import React, { useEffect, useState } from "react";

import PageHeader from "../../components/PageHeader/PageHeader";

import { useNavigate, useParams } from "react-router-dom";
import { AppRoutes } from "../../data/AppRoutes";
import UserForm from "../../components/Forms/User/UserForm";
import HttpCommon from "../../common/HttpCommon";

import "./ViewUser.css";
import Layout from "../../components/Layout/Layout";

export default function ViewUser() {
    const naviagte = useNavigate();
    const params = useParams();
    const [user, setUser] = useState();
    const [readOnly, setReadOnly] = useState(true);

    useEffect(() => {
        console.log(params);
        HttpCommon.get(`/users/${params.id}`).then((response) => {
            setUser(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <Layout>
            <PageHeader title={readOnly ? "View User" : "Edit User"} goBackEnabled={true} onGoBack={()=>{naviagte(AppRoutes.systemUser.list.path)}} />
            {
                user ? <UserForm user={user} readOnly={readOnly} onSubmit={(event) => {
                    event.preventDefault();
                    if(readOnly) {
                        setReadOnly(false);
                    } else {
                        // TODO: Update user in database
                        setReadOnly(true);
                    }
                }} /> : <div> Loading... </div>
            }
        </Layout>
    );
}