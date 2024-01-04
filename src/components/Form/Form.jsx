import { useState } from "react";
import { Input } from "./Input/Input";
import { TodoItem } from "./TodoItem/TodoItem";
// import { TodoList } from "./TodoList/TodoList";
import "./Form.css";

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [inputValueName, setInputValueName] = useState("");
  //  console.log(inputValueName);
  const [inputValueUserName, setInputValueUserName] = useState("");
  //  console.log(inputValueUserName);
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueAddress, setInputValueAddress] = useState("");

  const [count, setCount] = useState(11);
  const [arr, setArr] = useState([]);
  console.log(arr);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        text="name"
        iValue={inputValueName}
        setIValue={setInputValueName}
      />
      <Input
        text="Username"
        iValue={inputValueUserName}
        setIValue={setInputValueUserName}
      />
      <Input
        text="Email"
        iValue={inputValueEmail}
        setIValue={setInputValueEmail}
      />
      <Input
        text="Address"
        iValue={inputValueAddress}
        setIValue={setInputValueAddress}
      />

      <TodoItem
        arr={arr}
        name={inputValueName}
        setname={setInputValueName}
        userName={inputValueUserName}
        setuserName={setInputValueUserName}
        email={inputValueEmail}
        setEmail={setInputValueEmail}
        address={inputValueAddress}
        setAddress={setInputValueAddress}
        setCount={setCount}
        setArr={setArr}
        count={count}
      />
      {/* <TodoList arr={arr}/> */}
    </form>
  );
};
