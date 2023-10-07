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
            <Button className="customBlue text-white" onSubmitingData={true}>
              Save changes
            </Button>
          ) : (
            <Button className="customRed text-white" onSubmitingData={true}>
              Sure
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
