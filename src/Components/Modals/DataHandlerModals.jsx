import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "preact/hooks";

export default function DataHandlerModals({
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

  useEffect(() => {
    setIsShowingModal(showStatus);
  }, [showStatus]);

  const submitHandler = () => {
    onSubmitingData(true);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal
        show={isShowingModal}
        onHide={() => setIsShowingModal(false)}
        className=""
      >
        <Modal.Header className="customBlack text-white border-0" closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="customBlack text-white">{children}</Modal.Body>

        <Modal.Footer className="d-flex justify-content-between align-items-center customBlack text-white border-0">
          <Button
            className="bg-black text-white border-0"
            onClick={() => setIsShowingModal(false)}
          >
            Close
          </Button>
          {modalType === "add" || modalType === "edit" ? (
            <Button
              className="customBlue text-white border-0"
              onClick={submitHandler}
            >
              Save changes
            </Button>
          ) : (
            <Button
              className="customRed text-white border-0"
              onClick={submitHandler}
            >
              Sure
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
