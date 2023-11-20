import { useLocation } from "react-router-dom";

function Contact() {
    const location = useLocation();
    console.log(location);
    return <h1>Hello from Contact page</h1>;
}

export { Contact };