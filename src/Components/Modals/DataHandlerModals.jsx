import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "preact/hooks";

export default function AddingModal({
  showStatus,
  dataTransfer,
  sendCloseData,
  onSubmitingData,
  modalTitle,
  children,
  modalType,
}) {
  const [isShowingModal, setIsShowingModal] = useState(showStatus);

  useEffect(() => {
    sendCloseData(isShowingModal);
  }, [isShowingModal]);

  const submitHandler = () => {
    onSubmitingData(true);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={isShowingModal} onHide={() => setIsShowingModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{children}</Modal.Body>

        <Modal.Footer>
          <Button
            className="customBlack text-white"
            onClick={() => setIsShowingModal(false)}
          >
            Close
          </Button>
          {modalType === "add" || modalType === "edit" ? (
            <Button className="customBlue text-white" onClick={submitHandler}>
              Save changes
            </Button>
          ) : (
            <Button className="customRed text-white" onClick={submitHandler}>
              Sure
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
