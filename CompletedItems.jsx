
function CompletedItems({ todos }){    

  // to filter completed list items

  const completedTodos = todos.filter(todo => todo.completed);    

    return(

        <>
        <div className="display-completed">
           
           <div className="complete-div">
            {/* title */}
                 <h2 className="head-text">✦•┈๑⋅⋯ Completed Tasks ⋯⋅๑┈•✦ </h2>
                 <br></br>

                 {completedTodos.length === 0 ? (
                  // if there is no completed list item
                          <p>No completed tasks yet.</p>
                     ) : (
                      // map the completed items
                    <ul className="delete-complete-list">
                           {completedTodos.map(todo => (
                               <li key={todo.id}>{todo.text}</li>
                          ))}
                      </ul>
                        )}

           </div>

        </div>
           
        
        </>
    )
}

export default CompletedItems;