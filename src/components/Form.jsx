import { useState } from "react";
import { useDispatch } from "react-redux"
import { addUser } from "../reducers/usersReduser";

export const Form = () => {
    const dispatch = useDispatch();

    const [count, setCount] = useState(10);
    const [postName, setPostName] = useState('');
    const [postUserName, setPostUserName] = useState('');
    const [postEmail, setPostEmail] = useState('');
    const [postAddress, setPostAddress] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        setCount(prevState=>++prevState)
        dispatch(addUser({
           
                id: count + 1,
                name: postName,
                username: postUserName,
                email:postEmail,
                address: {
                    city: postAddress,
                }

            }
        ))
        
        setPostName ('');
    setPostUserName('');
    setPostEmail('');
    setPostAddress('');
    }

    

    const onChangeName = (e) => {
        setPostName(e.target.value);
    };

    const onChangeUserName = (e) => {
        setPostUserName(e.target.value);
    };

    const onChangeEmail = (e) => {
        setPostEmail(e.target.value);
    };

    const onChangeAddress = (e) => {
        setPostAddress(e.target.value);
    };

    return (



        <form 
        onSubmit={addNewPost}
        >
            <div className="inputs">
<label>
  Name: <input value = {postName} onChange={onChangeName}/>
</label>
<label>
    Nik: <input required value = {postUserName} onChange={onChangeUserName}/>
</label>
<label>
    Email: <input required value = {postEmail} onChange={onChangeEmail}/>
</label>
<label>
    Address: <input required value = {postAddress} onChange={onChangeAddress}/>
</label>
            </div>
<div>
    <button type='submit'>ADD USER</button>
</div>



        </form>
    
    )
    };