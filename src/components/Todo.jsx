import './Todo.css';

function Todo({ title, deleteTodo }) {
    return (
        <div className='todo'>
          <h2>{ title }</h2>
          <button onClick={deleteTodo}>Delete</button>
          
        </div>
    );
}

export default Todo;