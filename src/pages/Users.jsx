import { useParams } from 'react-router-dom';

function Users() {
    const { id, name, email, username } = useParams();  

//  "https://jsonplaceholder.typicode.com/users/id"

    
    return (  
        <div>
        <h1>Selected User:</h1>
        <ul>
            <li>{ id }</li>            
            <li>{ name }</li>
            <li>{ email }</li>
            <li>{ username }</li>
        </ul>
        </div>
    );
}

export default Users;