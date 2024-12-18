import React from 'react';

// Defining the type for the props
interface GreetingProps {
    name: string; // type of name is a string
}

// Converting the functional component to TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

export default Greeting;