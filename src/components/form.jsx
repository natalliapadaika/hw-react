import { useState } from "react";

export const Todolist = () => {
  const [inputValueOne, setInputValueOne] = useState("");
  const [inputValueTwo, setInputValueTwo] = useState("");
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addPost = (event) => {
    {
      setCount((count) => count + 1);
      setArr([
        ...arr,
        { id: count, title: inputValueOne, text: inputValueTwo },
      ]);
      setInputValueOne((event.target.value = ""));
      setInputValueTwo((event.target.value = ""));
    }
  };

  let list = arr.map((element) => {
    return (
      <div className="App-main-todolist" key={element.id}>
        <div className="App-main-todolist-t">{element.title}</div>
        <div className="App-main-todolist-t">{element.text}</div>
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValueOne}
          onChange={(event) => setInputValueOne(event.target.value)}
        />
        <input
          value={inputValueTwo}
          onChange={(event) => setInputValueTwo(event.target.value)}
        />

        <button type="submit" onClick={addPost}>
          {" "}
          Добавь Заголовок и Текст
        </button>
      </form>

      {list}
    </div>
  );
};
