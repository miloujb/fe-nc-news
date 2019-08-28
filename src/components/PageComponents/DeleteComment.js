import React from "react";
import { deleteComment } from "../API/api";

const DeleteComment = props => {
  // IF (PROPS.USERNAME === PROPS.COMMENTS.USERNAME)
  return (
    <div>
      <button type="submit" onClick={() => deleteComment(props.comment_id)}>
        Delete
      </button>
    </div>
  );
  // else return null;
};

export default DeleteComment;
