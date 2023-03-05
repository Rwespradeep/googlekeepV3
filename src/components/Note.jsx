import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1 name="noteTitle">{props.title}</h1>
      <p name="notePara">{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}
export default Note;
