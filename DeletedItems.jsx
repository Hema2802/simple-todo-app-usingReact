
function DeletedItems( { deletedTodos } ){

    
  
      return(
  
          <>
          <div className="display-deleted">
             
             <div className="delete-div">
                {/* title  */}
                   <h2 className="head-text">✦•┈๑⋅⋯ Deleted Tasks ⋯⋅๑┈•✦</h2>   
                   <br></br>

                   {/* unordered list to listout the deleted items */}
                   <ul className="delete-complete-list">
                   {deletedTodos.length === 0 ? (
                    // if there is no task
                          <p>No deleted tasks yet.</p>
                  ) :(
                //    map the list items
                   deletedTodos.map((todo) => (
                   <li key={todo.id}>{todo.text}</li>
                   )))}
      </ul>
                   
      
  
             </div>
  
          </div>
             
          
          </>
      )
  }

  export default DeletedItems;
//   exporting Deleted items component