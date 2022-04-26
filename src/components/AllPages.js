import { useState } from "react"
import Form from "./Form"
import PageTwo from "./PageTwo"


const arr = [
    {
        
        name: "Sadyr",
        age: 23,
        city: 'Bishkek',
    },
    {
        
        name: "Uson",
        age: 33,
        city: 'Batken',
    },
    {
        
        name: "Asan",
        age: 41,
        city: 'Naryn',
    },
]


function AllPages(){

    const newArr = arr.map((el)=>{
        return {...el, id: Math.random().toString()}
    })

    const [state, setState] = useState(newArr)
    console.log(state);

    function AddHandler(id){
        const array = state.filter((el)=>{
            if(el.id===id){
                setState(prev=> [...prev, el])
            }
        })
    }
    function deleteList(deleteid){

        const deleteId = state.filter((elem)=>{
            if(elem.id !== deleteid){
                return elem
            }
         
        })
        setState(deleteId)
    }

    function saveInpHandler(inpObj){
        console.log(inpObj);
        if(inpObj!==''){
        return setState(prev=>[...prev, inpObj])
        }
    }

    return (
        <div>
            <Form onSaveInpHandler={saveInpHandler}
            />
           {state.map((elem)=>{
               return (
                   <PageTwo key={elem.id} id={elem.id} name={elem.name} age={elem.age} city={elem.city}
                    onAddHandler={AddHandler}
                    onDeleteList={deleteList}/>
               )
           })}
        </div>
    )
}
export default AllPages