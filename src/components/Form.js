import { useState } from 'react'
import './Form.css'
function Form(props){

    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [city, setCity] = useState()
  
    

    function nameHandler(e){
        setName(e.target.value)
    }
    function ageHandler(e){
        setAge(e.target.value)
    }
    function cityHandler(e){
        setCity(e.target.value)

    }

    function submitHandler(e){
        e.preventDefault()
        const inpObj = {
            name:name,
            age:age,
            city:city,
            id: Math.random()
        }
        console.log(name);
        props.onSaveInpHandler(inpObj)
    }
    

    return (
        <form onSubmit={submitHandler} className="form-wrap">
            <div>
            <input onChange={nameHandler} placeholder="Name"></input>
            <input type="number" onChange={ageHandler} placeholder="Age"></input>
            <input onChange={cityHandler} placeholder="City"></input>
            </div>
            <button >Click me</button>
            <p>{name}</p>
            <p>{age}</p>
            <p>{city}</p>
            
        </form>
    )
}
export default Form