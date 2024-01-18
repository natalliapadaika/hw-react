import { useDispatch, useSelector } from "react-redux";
import { ADD_CASH, GET_CASH } from "../store/cashReducer";

const Home = ({ title }) => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  const addCash = (cash) => {
    dispatch({ type: ADD_CASH, payload: cash });
  };

  const getCash = () => {
    dispatch({ type: GET_CASH, payload: 5 });
  };

  return (
    <div className="cash">
      {title}
      <h2>{cash}</h2>
      <button onClick={() => addCash(Number(prompt()))}>add Cash</button>
      <button onClick={() => getCash()}>Get cash</button>
    </div>
  );
};
export default Home;
