// import { useState, useEffect } from "react";
import "./AllStudentNotes.scss";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { notesRoute } from "../../api/endpoints";
import { BsPen } from "react-icons/bs";
// import "./"
import { notes } from "../../data/dummy";

const AllStudentNotes = () => {
  // const { student } = useSelector((state) => state.auth);

  // const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   const fetchNotes = async () => {
  //     const res = await axios.get(`${notesRoute}/${student?._id}`);
  //     setNotes(res.data);
  //   };

  //   fetchNotes();
  // }, []);

  /*  if (notes?.notes.length === 0) {
    return (
      <div className="default__outlet noNotes">
        <p>{notes.message}</p>

        <BsPen className="pen" />
      </div>
    ); 
  }  */

  return (
    <div className="default__outlet notesWrapper">
      <div className="note-content_container">
        {notes.map((note, index) => (
          <div className="note-item_container" key={index}>
            <div className="note_preview__container">Preview</div>
            <div className="note-item-header">
              <h4>{note.title}</h4>

              <p>
                {note.subject} <span>{note.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pen__container">
        <Link to={`/notes/${uuidv4()}`}>
          <div className="pen__content">
            <BsPen className="pen" />
            <p>Add new notes</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AllStudentNotes;
