import { useState} from "react";

export const Input = ({iValue, setIValue, text}) =>{

// const[inputValue, setInputValue] = useState('');

return (
<div>
<input 
value={iValue}
placeholder = {text}
onChange={(event) => setIValue(event.target.value)}
/>

</div>

)

}