import React from 'react';
import Greeting from "./Greeting";

const Main = () => {
    const person = {
        fName: 'John',
        lName: 'Doe',
        age: 30
    }
    return (
        <div>
            <Greeting name="World" person={person} />
            <Greeting name="Ivan" person={person}/>
            <Greeting name="All" person={person}>All you need is love</Greeting>
        </div>

    )
}

export default Main