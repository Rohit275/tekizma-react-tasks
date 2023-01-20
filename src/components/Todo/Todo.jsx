import "./Todo.css";
// import { useState } from "react";
// import Modal from "../Modal/Modal";

function Todo({ title, content }) {
  // const [modalOpen, setModal] = useState(false);
  let handleDelete = () => {
    // setModal(true);
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <span className="card-text">{content}</span>
          <button className="btn btn-primary" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {/* {modalOpen && <Modal setOpenModal={setModal} />} */}
    </div>
  );
}

export default Todo;
