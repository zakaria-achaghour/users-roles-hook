import React from 'react';
import { useParams , Route} from 'react-router-dom';
import ShowUser from './../users/ShowUser';

const ShowRole = (props)=> {
    const params = useParams();
    return (
        <div>
            <h1>Role number : {params.id} </h1>
            <Route exact path={`/roles/${params.id}/users`} component={ShowUser}/>
            {/* <Route path='/roles/:id/users'/> */}
        </div>
    )
}

export default ShowRole