import React, {useState} from 'react';

const Greeting = (props) => {

    const [greet, setGreet] = useState('Hello')
    const [buttonShow, setButtonShow] = useState(true)
    const [person, setPerson] = useState(props.person)

    const renderChildren = () => {
        return (
            props.children ? <p>{props.children}</p> : null
        )
    }

    const handleBye = () => {
        setGreet('Bye')
        setButtonShow(false)
        setPerson({...person, fName: 'Ivan'})
    }

    const renderButton = () => {
        return (
            buttonShow ? <button onClick={handleBye}>Bye</button> : null
        )
    }

    return (
        <div>
            <h1>{greet}, {person.fName}!!!</h1>
            { renderButton() }
            {renderChildren()}
        </div>
    )
}

export default Greeting