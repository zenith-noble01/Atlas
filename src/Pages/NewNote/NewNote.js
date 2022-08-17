import React, { useState } from "react";
import "./NewNote.scss";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewNote = () => {
  // let { noteId } = useParams();
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  console.log(note);
  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const [value, setValue] = useState("");

  console.log(value);
  return (
    <div className="default__outlet newNote">
      <div className="newNote__container">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default NewNote;
