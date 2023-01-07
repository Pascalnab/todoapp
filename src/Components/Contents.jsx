import React, { useState } from 'react';


let globalID = 0; 

function Contents() {


    const [task, setTask] = useState("") ;     
    const [todos, setTodos] = useState([]); 


    function create(e) {
       e.preventDefault(); 

        setTodos(oldTodos => {
            setTask(""); 
            return [...oldTodos, {todo: task, id: globalID++ }]; 
        })
    }

    // function checkEnterKey(e) {
    //     if(e.keyCode === 13) {
    //         create(); 
    //     }
    // }
    function deleteItem(ID) {
        setTodos(oldTodos => oldTodos.filter(item => item.id !== ID))
    }

    return(<div>
        
        <div id='area'>
        <form onSubmit={create}>
        <input id='inputfield' 
                typeof='text' 
                value={task} 
                onChange={e => {
                    setTask(e.target.value); 
        } }/> 

        <button type='submit'> 
            <b>Create</b> 
        </button>
        </form>
        </div>

        <div className='listclass'>
        <ul id='listid'>
               { todos.map((item, index) => {
                  return <div> 
                    <li id='liEl'> 
                    {item.todo}
                  </li>
                  <button onClick={() => deleteItem(item.id)}>Delete</button> 
                  </div>
                })
            }
        </ul>
        </div>

    </div>)
}

export default Contents; 