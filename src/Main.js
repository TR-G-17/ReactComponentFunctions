import React from 'react';
import Greeting from "./Greeting";

const Main = () => {
    return (
        <div>
            <Greeting name="World" />
            <Greeting name="Ivan" />
            <Greeting name="All">All you need is love</Greeting>
        </div>

    )
}

export default Main