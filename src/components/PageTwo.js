import './PageTwo.css'

function PageTwo(props){

    function addSubHandler(){
       props.onAddHandler(props.id)
    }
    function deleteHandler(){
        
        props.onDeleteList(props.id)
        
    }

    return (
        <div className='wrap'>
            <div className="pageOne-wrap">
                <div>{props.name}</div>
                <div>{props.age}</div>
                <div>{props.city}</div>
                <div>
                <button onClick={addSubHandler}>Добавить</button>
                <button onClick={deleteHandler}>Delete</button>
                </div>
            </div>
        </div>
    )
}
export default PageTwo