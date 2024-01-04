
import { useState } from "react"

export const TodoItem = ({arr, name, setname, userName, setuserName, email, setEmail, address, setAddress, setCount, setArr, count}) => {


    const addUser = (event) => {
        {
          setCount((count) => count + 1);
          setArr([
            ...arr,
            { id: count, name: name, username: userName, email: email, address: address },
          ]);
     
          setname((event.target.value = ""));
          setuserName((event.target.value = ""));
          setEmail((event.target.value = ""));
          setAddress((event.target.value = ""));
        }
      };




return (
    <button type="submit" onClick={addUser}>
    Заполнить 
    </button>
    
)
}