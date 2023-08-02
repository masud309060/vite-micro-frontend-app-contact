import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, Divider, Typography} from "@mui/material";
import {IContact} from "./ContactHome.tsx";

const ContactDetails: React.FC = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState<IContact>({} as IContact);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(id) {
            setLoading(true)
            fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then((response) => response.json())
                .then((data) => {
                    setContact(data as IContact)
                })
                .finally(() =>  setLoading(false))
        }
    }, [id])

    useEffect(() => {
        return () => console.log("Unmount Contact Details ======> ")
    }, [])

    const onBack = () => {
        navigate(-1)
    }

    if(loading || !contact?.id ) return "Loading...";
    if(!loading && !contact?.id) return null;

    const {name, email, phone, website, username} = contact || {};

    return (
        <Box sx={{border: "2px solid #3498db", p: 3, m: 3}}>
            <Button onClick={onBack}>
                Back
            </Button>
            <Typography variant={"h3"}>
                {username}
            </Typography>
            <Divider />

            <Typography variant={"body1"}>
                Name: {name}
            </Typography>
            <Typography variant={"body1"}>
                Email: {email}
            </Typography>
            <Typography variant={"body1"}>
                Phone: {phone}
            </Typography>
            <Typography variant={"body1"}>
                Website: {website}
            </Typography>
        </Box>
    );
};

export default ContactDetails;