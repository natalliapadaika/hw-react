import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCom } from "../actions/users/commentsActions";

import { useParams } from "react-router-dom";

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.comments.comments);

  const [comment, setComment] = useState("");

  const { id } = useParams();

  let commentsForUsers = comments.filter((item) => item.id === id);
  // console.log(commentsForUsers)

  const addNewComment = (e) => {
    e.preventDefault();

    dispatch(addCom(comment, id));
    setComment("");
  };

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <form onSubmit={addNewComment}>
        <div>
          <label>
            Ваш комментарий:{" "}
            <input required value={comment} onChange={onChangeComment} />
          </label>
        </div>
        <div>
          <button type="submit">ADD COMMENT</button>
        </div>
      </form>

      <div className="comments">
        {commentsForUsers.map((comment) => (
          <p key={Math.random()}>{comment.comment}</p>
        ))}
      </div>
    </>
  );
};
