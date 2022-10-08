import React from 'react';

const About = () => {
    const admin = false;
    return (
        <div>
            <h1>About Page</h1>
            {
                admin? <p>Hi</p>: <p>Hello</p>
            }
        </div>
    );
};

export default About;