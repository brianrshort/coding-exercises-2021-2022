import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

const handleSubmit = (e) => {
  event.preventDefault();
  const obj = {
    id: generateId(),
    text: text,
    expiresAt: getNewExpirationTime()
  };
  if (text.length > 0) {
    props.addThought(obj);
    setText("");
  }
}

  return (
    <form className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
