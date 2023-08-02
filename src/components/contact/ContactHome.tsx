import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Image} from "@mui/icons-material";
import {Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography} from "@mui/material";
import reactLogo from "../../assets/react.svg";
import viteLogo from '/vite.svg'

export interface IContact {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
}

const ContactHome: React.FC = () => {
    const [contactList, setContactList] = useState<IContact[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setContactList(data as IContact[])
            });
    }, [])

    useEffect(() => {
        return () => console.log("Unmount Contact Home ======> ")
    }, [])

    return (
        <Box sx={{border: "2px solid #3498db", p: 3, m: 3}}>

            <div className={"contact-card"}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <div>
                <Typography variant={"h3"}>
                    Contacts
                </Typography>
                <Stack direction={"row"} spacing={2}>
                    <Link to={"/"}>Back to home</Link>
                    <Link to={"/apps"}>Go to apps</Link>
                </Stack>

                <Divider/>


                <List sx={{width: '100%'}}>
                    {contactList.map(contact => (
                        <ListItem key={contact.id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <Image/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={contact.name} secondary={<Link to={"/contact/" + contact.id}>{contact.email}</Link>}/>
                        </ListItem>
                    ))}
                </List>
            </div>

        </Box>
    );
};

export default ContactHome;