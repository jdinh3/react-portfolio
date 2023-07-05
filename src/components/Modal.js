import React from "react";
import { Modal } from "react-bootstrap";

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="project-title w-100 text-center"
        >
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>{props.description}</h6>
      </Modal.Body>
      <Modal.Footer
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="btnLinks m-auto">
          {props.site ? (
            <a href={props.site} className="button btn" target="_blank">
              Site
            </a>
          ) : null}

          {props.tutorial ? (
            <a href={props.tutorial} className="button btn" target="_blank">
              Tutorial
            </a>
          ) : null}

          {props.repo ? (
            <a href={props.repo} className="button btn" target="_blank">
              Repo
            </a>
          ) : null}
        </div>
      </Modal.Footer>
    </Modal>
  );
}

function ModalApp(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <a
        class="projectBtn"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        <img src={props.image} className="card-image" variant="top" />
      </a>

      <MyModal {...props} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ModalApp;
