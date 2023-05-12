import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addToy} from "./reducers/toys";
import {fetchUsers} from "./reducers/user";

function App() {

    const toys = useSelector(state => state.toys);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(fetchUsers());
    },[dispatch])

    return (
        <div>
            {toys.map((itm, idx)=>
                <h1 key={idx}>{itm.name}</h1>
            )}

            {users.map((itm, idx)=>
                <h1 key={idx}>{itm.name}</h1>
            )}

            <button onClick={()=>dispatch(addToy({name:"frisbee"}))}>Add Toy</button>

        </div>
    );
}

export default App;
