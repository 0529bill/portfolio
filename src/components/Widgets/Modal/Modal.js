import { Modal as BoostrapModal, Button, Row } from 'react-bootstrap';
import i18n from '@Lang/i18n/i18n';
import './index.css';
function Modal(props) {
  let a = i18n();
  return (
    <>
      <BoostrapModal {...props} centered>
        <BoostrapModal.Body>
          <h4 className="modal_header">
            {a('frontend.local.resume.downloadResume')}
          </h4>
          <Row className="modal_row">
            <button className="modal_button">English version</button>
            <button className="modal_button">Chinese version</button>
          </Row>
        </BoostrapModal.Body>
      </BoostrapModal>
    </>
  );
}

export default Modal;
