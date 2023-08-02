import {Box} from "@mui/material";
import {useEffect} from "react";
import ContactHome from "./components/contact/ContactHome.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContactDetails from "./components/contact/ContactDetails.tsx";

const router = createBrowserRouter([
    {
        path: "/contact",
        element: <ContactHome/>
    },
    {
        path: "/contact/:id",
        element: <ContactDetails/>
    },

]);


function App() {

    useEffect(() => {
        return () => console.log("Contact page unmount ======> ")
    }, [])

    return (
        <Box>
            <RouterProvider router={router}/>
        </Box>
    )
}

export default App
