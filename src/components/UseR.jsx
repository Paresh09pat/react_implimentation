// import React, {useRef} from 'react'

// function UserRef() {
//     const chutiyaSala = useRef(null);

//     function handleSubmit() {
//         alert(`Name : ${chutiyaSala.current.value}`);
//     }
//     return (
//         <>

//             <h2>Uncontrolled Component</h2>
//             <form onSubmit={handleSubmit}>
//                 <label> Name : </label>
//                 <input ref={chutiyaSala}></input>
//                 <button type='submit'> Submit</button>
//             </form>

//         </>
//     )
// }

// export default UserRef

//----------------------------------------------------------------------------------------------------------

// Controlled Components
import { useState } from 'react';

function UserRef() {
    const [name, setName] = useState('');

    function handleSubmit() {
        alert(`Name: ${name}`);
    }

    return (
        <div className="App">
            <h3>Controlled Component</h3>
            <form onSubmit={handleSubmit}>
                <label> Name: </label>
                <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserRef;