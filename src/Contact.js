import React from "react";

const Contact = ({ visits }) => {
    return (
        <div>
            <h2>
                Contact Page
            </h2>
            <p>
                Welcome to Contact page
            </p>
            <p>
                Home page visited {visits} times.
            </p>
        </div>
    );
}
export default Contact;