import { Modal as BoostrapModal, Button, Row } from 'react-bootstrap';
import i18n from '@Lang/i18n/i18n';
import { GAevent } from '@GoogleAnalytics/googleAnalytics';
import resume_eng from '@Assets/Resume/resume_eng.pdf';
import resume_tw from '@Assets/Resume/resume_tw.pdf';
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
            <button className="modal_button">
              <a
                onClick={() => GAevent('downloadResume', 'en')}
                href={resume_eng}
                target="_blank"
                style={{ textDecoration: 'none', color: 'black' }}
                download
              >
                English version
              </a>
            </button>
            <button className="modal_button">
              <a
                onClick={() => GAevent('downloadResume', 'tw')}
                href={resume_tw}
                target="_blank"
                style={{ textDecoration: 'none', color: 'black' }}
                download
              >
                Chinese version
              </a>
            </button>
          </Row>
        </BoostrapModal.Body>
      </BoostrapModal>
    </>
  );
}

export default Modal;
