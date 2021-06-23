import React, { useState, useEffect } from 'react';
import i18n from '@Lang/i18n/i18n';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from '@Components/Widgets/Modal/Modal';
import './index.css';
import { GApageView } from '@GoogleAnalytics/googleAnalytics';
function Resume() {
  let a = i18n();
  useEffect(() => GApageView('portfolio/Resume'), []);

  let [openModal, setOpenModal] = useState(false);
  let webSkillData = ['Javascript', 'HTML', 'css', 'Git', 'React', 'Redux'];
  let languageData = ['Chinese (Native)', 'English (TOEIC 930)'];
  let interestData = ['surfing', 'photography', 'drawing'];

  return (
    <>
      <Container className="resume" fluid>
        <Container className="resume_main">
          <Container className="resume_description">
            <div className="resume_description_title">
              {a('frontend.local.resume.description.title')}
            </div>
            <div className="resume_description_jobTitle">
              {a('frontend.local.resume.description.jobTitle')}
            </div>
            <div>{a('frontend.local.resume.description.location')}</div>
          </Container>
          <Row style={{ paddingBottom: '50px' }} className="resume_row">
            <Col
              md={3}
              className="resume_school_main"
              style={{
                borderRight:
                  window.screen.width <= 768
                    ? 'null'
                    : '3px solid rgb(241 239 239)',
              }}
            >
              <Container className="resume_school">
                <div className="resume_subtitle">
                  {a('frontend.local.resume.info')}
                </div>
                <div className="resume_description_text2">
                  0529bill@gmail.com
                </div>
                <div>https://githhub.com/0529bill</div>
                <div className="resume_subtitle">
                  {a('frontend.local.resume.education')}
                </div>
                <div className="resume_school_text">
                  <p> {a('frontend.local.resume.education.scholl')} </p>
                  <p>{a('frontend.local.resume.educaton.major')}</p>
                  <p>{a('frontend.local.resume.education.otherCourses')}</p>
                </div>
                <div className="resume_subtitle">
                  {a('frontend.local.resume.honors')}
                </div>
                <div>{a('frontend.local.resume.honors.description')}</div>
              </Container>
            </Col>
            <Col md={9}>
              <Container className="resume_skills">
                <div className="resume_subtitle">
                  {a('frontend.local.resume.careerObjective')}
                </div>
                <div className="resume_description_text1">
                  {a('frontend.local.resume.careerObjective.description')}
                </div>
                <div className="resume_subtitle">
                  {a('frontend.local.resume.skills')}
                </div>
                <Row>
                  <Col>
                    {a('frontend.local.resume.skills.webDevelopment')}
                    {webSkillData.map((data, id) => (
                      <div className="resume_bullet">
                        <ul>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>

                  <Col>
                    {a('frontend.local.resume.skills.language')}
                    {languageData.map((data, id) => (
                      <div className="resume_bullet">
                        <ul>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>
                  <Col>
                    {a('frontend.local.resume.skills.otherInterests')}
                    {interestData.map((data, id) => (
                      <div className="resume_bullet">
                        <ul>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>
                </Row>
              </Container>
              <Container>
                <div className="resume_subtitle">
                  {a('frontend.local.resume.skills.volunteering')}
                </div>
                <div>
                  {a('frontend.local.resume.skills.volunteering.description')}
                  <div className="resume_bullet">
                    <ul>
                      <span>
                        {a(
                          'frontned.local.resume.skills.volunteering.descrption.bullet1'
                        )}
                      </span>
                    </ul>
                  </div>
                  <div className="resume_bullet">
                    <ul>
                      <span>
                        {a(
                          'frontend.local.resume.skills.volunteering.description.bullet2'
                        )}
                      </span>
                    </ul>
                  </div>
                </div>
              </Container>
              <Container className="resume_workExperences">
                <div className="resume_subtitle">
                  {a('frontend.local.resume.workExperences')}
                </div>
                <div>
                  {a('fronend.local.resume.workExperences.desciption')}
                  <div className="resume_bullet">
                    <ul>
                      <span>
                        {a('frontend.local.resume.workExperences.bullet1')}
                      </span>
                    </ul>
                  </div>
                  <div className="resume_bullet">
                    <ul>
                      <span>
                        {a('frontend.local.resume.workExperences.bullet2')}
                      </span>
                    </ul>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
        <Row className="resume_download">
          <button
            className="resume_downloadButton"
            onClick={() => setOpenModal(true)}
          >
            {a('frontend.local.resume.downloadResume')}
          </button>
        </Row>
        <Modal show={openModal} onHide={() => setOpenModal(false)} />
      </Container>
    </>
  );
}

export default Resume;
