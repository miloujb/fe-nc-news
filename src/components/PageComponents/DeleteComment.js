import React from "react";
import { deleteComment } from "../API/api";

const DeleteComment = props => {
  return (
    props.username === props.loggedInUser && (
      <div>
        <button type="submit" onClick={() => deleteComment(props.comment_id)}>
          Delete
        </button>
      </div>
    )
  );
};

export default DeleteComment;
