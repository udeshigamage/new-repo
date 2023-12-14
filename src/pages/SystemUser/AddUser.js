import React from "react";

import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/PageHeader/PageHeader";
import UserForm from "../../components/Forms/User/UserForm";
import { AppRoutes } from "../../data/AppRoutes";
import Layout from "../../components/Layout/Layout";

export default function AddUser() {
    const navigate = useNavigate();


    function onFormSubmit(event) {
        event.preventDefault();
        
        const data = new FormData(event.target);
        
        const user = {
            name: data.get("name"),
            username: data.get("username"),
            email: data.get("email"),
            phone: data.get("contact"),
            company: {
                name: data.get("company")
            }
        };

        function validateUser( user ) {
            const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
            const phoneRegex = /^\+?[0-9]{10,}$/;
            const websiteRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

            return (
                user.name && 
                user.username && 
                user.email && 
                user.phone && 
                user.company.name &&
                emailRegex.test(user.email) &&
                phoneRegex.test(user.phone) &&
                websiteRegex.test(user.company.name)    
            );
        }

        if ( validateUser(user) ) {
            // TODO: Add user to database
            console.log(user);
        }
    }

    return (
        <Layout>
            <PageHeader title="Add User" goBackEnabled={true} onGoBack={() => navigate(AppRoutes.systemUser.list.path)} />
            <UserForm onSubmit={onFormSubmit} readOnly={false} />
        </Layout>
    );
}