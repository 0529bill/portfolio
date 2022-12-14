import './index.css';

import { Col, Container, Image, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import BP from '@Assets/Projects/B&P.png';
import { GApageView } from '@GoogleAnalytics/googleAnalytics';
import Modal from '@Components/Widgets/Modal/Modal';
import TinyURl from '@Assets/Projects/TinyUrl.webp';
import clientValidaiton from '@Assets/Projects/client-validation.webp';
import countable from '@Assets/Projects/countable.png';
import flourish from '@Assets/Projects/flourish.png';
import i18n from '@Lang/i18n/i18n';
import instaChat from '@Assets/Projects/instaChat.png';
import myPortfolio from '@Assets/Projects/myPortfolio.png';
import visacard from '@Assets/Projects/visacard.png';

function Resume() {
  let a = i18n();
  useEffect(() => GApageView('portfolio/Resume'), []);

  let [openModal, setOpenModal] = useState(false);
  let webSkillData = [
    'Typescript',
    'Javascript',
    'Html/css',
    'Git',
    'React, Redux',
    'vite',
    'Website optimization',
    'Next.js(learning)',
    'express(learning)',
    'MongoDB, mongoose(learning)',
  ];
  let languageData = ['Chinese (Native)', 'English (TOEIC 930)'];
  let interestData = ['bouldering', 'surfing', 'photography', 'drawing'];

  let instaChatSkill = ['socket.io', 'express'];
  let myPortfolioSkill = ['jest test', 'useReducer'];
  let visaCardSkill = [
    'Typecsript',
    'form validation',
    '3D effect',
    'useReducer',
    'Eslint',
  ];

  let validationSkill = ['Typescript'];

  let urlSkill = [
    'Typescript',
    'React context-api, useReducer',
    'Vite',
    'node.js + express.js',
    'google oauth',
    'mongoDB + mongoose',
  ];
  let countableSkill = [
    'react',
    'redux',
    'react hooks',
    'react-router',
    'redux-thunk',
    'bootstrap',
  ];
  let bpSkill = ['shopping cart', 'context-api', 'react-router'];
  let flourishSkill = ['firebase_authenticaton', 'context-api', 'bootstrap'];

  let instaChatFeature = ['realtime chatroom', 'websocket'];
  let myPortfolioFeature = ['i18n', 'google analytics', 'downloadable resume'];
  let visaCardFeature = ['downloadable image'];
  let validationFeature = ['lightweight and very easy to use'];
  let urlFeature = [
    'shorten any URL',
    `provides URL's qr-code`,
    `provides URL's analytic data including url click count`,
  ];
  let countableFeature = ['CRUD operation', 'oauth authentication'];
  let flourishFeature = [
    'signIn/signUp',
    'private router',
    'functional component',
  ];
  let bpFeature = ['shopping cart', 'signIn/signUp', 'tinyJPG'];
  return (
    <>
      <Container className="resume" fluid>
        <Row className="resume_download">
          <button
            className="resume_downloadButton"
            onClick={() => setOpenModal(true)}
          >
            {a('frontend.local.resume.downloadResume')}
          </button>
        </Row>
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
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>

                  <Col>
                    {a('frontend.local.resume.skills.language')}
                    {languageData.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>
                  <Col>
                    {a('frontend.local.resume.skills.otherInterests')}
                    {interestData.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>
                </Row>
              </Container>
              <Container>
                <Container className="resume_workExperences">
                  <div className="resume_subtitle">
                    {a('frontend.local.resume.workExperences')}
                  </div>
                  <div>
                    <div className="resume_title">
                      {a('frontend.local.resume.workExperences.MusicBravo')}
                    </div>
                    <div className="resume_bullet">
                      <span style={{ whiteSpace: 'pre-line' }}>
                        {a(
                          'frontend.local.resume.workExperences.MusicBravo.description'
                        )}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="resume_title">
                      {a('frontend.local.resume.workExperences.englishTeacher')}
                    </div>
                    <div className="resume_bullet">
                      <ul>
                        <span>
                          {a(
                            'frontend.local.resume.workExperences.englishTeacher.bullet1'
                          )}
                        </span>
                      </ul>
                    </div>
                    <div className="resume_bullet">
                      <ul>
                        <span>
                          {a(
                            'frontend.local.resume.workExperences.englishTeacher.bullet2'
                          )}
                        </span>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="resume_title">
                      {a('frontend.local.resume.description.job.dipp')}
                    </div>
                    <div className="resume_bullet">
                      <ul>
                        <span>
                          {a(
                            'frontend.local.resume.description.job.dipp.description'
                          )}
                        </span>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="resume_title">
                      {a('fronend.local.resume.workExperences.desciption')}
                    </div>
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
                <div className="resume_subtitle">Side Projects</div>
                <Row style={{ marginBottom: '40px' }}>
                  <Col>
                    <p className="resume_projectName">
                      {a(
                        'frontned.local.resume.sideProjects.projectName_validation'
                      )}
                    </p>
                    <Image
                      src={clientValidaiton}
                      thumbnail
                      style={{
                        maxHeight: '150px',
                        objectFit: 'scale-down',
                        width: '100%',
                      }}
                    />
                    <p className="resume_projectsSubtitle">
                      {a(
                        'frontend.local.projects.cardData.cardText.validation'
                      )}
                    </p>
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.projectFeatures')}
                    </p>
                    {validationFeature.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.toolsUsed')}
                    </p>
                    {validationSkill.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>
                  <Col>
                    <p className="resume_projectName">
                      {a(
                        'frontned.local.resume.sideProjects.projectName_validation'
                      )}
                    </p>
                    <Image
                      src={TinyURl}
                      thumbnail
                      style={{
                        maxHeight: '150px',
                        objectFit: 'scale-down',
                        width: '100%',
                      }}
                    />
                    <p className="resume_projectsSubtitle">
                      {a('frontend.local.projects.cardData.cardText.tinyUrl')}
                    </p>
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.projectFeatures')}
                    </p>
                    {urlFeature.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.toolsUsed')}
                    </p>
                    {urlSkill.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>
                  <Col>
                    <p className="resume_projectName">
                      {a(
                        'frontend.local.resume.sideProjects.projectName_instaChat'
                      )}
                    </p>
                    <Image
                      thumbnail
                      src={instaChat}
                      style={{
                        maxHeight: '150px',
                        objectFit: 'scale-down',
                        width: '100%',
                      }}
                    />
                    <p className="resume_projectsSubtitle">
                      {a('frontend.local.projects.cardData.cardText.instaChat')}
                    </p>
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.projectFeatures')}
                    </p>
                    {instaChatFeature.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.toolsUsed')}
                    </p>
                    {instaChatSkill.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="resume_projectName">
                      {a('frontned.local.resume.sideProjects.projectName1')}
                    </p>
                    <Image
                      src={countable}
                      thumbnail
                      style={{ maxHeight: '150px', objectFit: 'scale-down' }}
                    />
                    <p className="resume_projectsSubtitle">
                      {a('frontend.local.resume.sideProjects.description1')}
                    </p>
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.projectFeatures')}
                    </p>
                    {countableFeature.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.toolsUsed')}
                    </p>
                    {countableSkill.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>
                  <Col>
                    <p className="resume_projectName">
                      {a('frontend.local.resume.sideProjects.projectName2')}
                    </p>
                    <Image
                      thumbnail
                      src={BP}
                      style={{ maxHeight: '150px', objectFit: 'scale-down' }}
                    />
                    <p className="resume_projectsSubtitle">
                      {a('frontend.local.resume.sideProjects.description2')}
                    </p>
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.projectFeatures')}
                    </p>
                    {bpFeature.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.toolsUsed')}
                    </p>
                    {bpSkill.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>
                  <Col>
                    <p className="resume_projectName">
                      {a(
                        'frontned.local.resume.sideProjects.projectName_visacard'
                      )}
                    </p>
                    <Image
                      src={visacard}
                      thumbnail
                      style={{
                        maxHeight: '150px',
                        objectFit: 'scale-down',
                        width: '100%',
                      }}
                    />
                    <p className="resume_projectsSubtitle">
                      {a('frontend.local.projects.cardData.cardText.visacard')}
                    </p>
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.projectFeatures')}
                    </p>
                    {visaCardFeature.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.toolsUsed')}
                    </p>
                    {visaCardSkill.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>
                  <Col>
                    <p className="resume_projectName">
                      {a('frontend.local.resume.sideProjects.projectName3')}
                    </p>
                    <Image
                      thumbnail
                      src={flourish}
                      style={{ maxHeight: '150px', objectFit: 'scale-down' }}
                    />
                    <p className="resume_projectsSubtitle">
                      {a('frontend.local.resume.sideProjects.description3')}
                    </p>
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.projectFeatures')}
                    </p>
                    {flourishFeature.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.toolsUsed')}
                    </p>
                    {flourishSkill.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>
                  <Col>
                    <p className="resume_projectName">
                      {a(
                        'frontned.local.resume.sideProjects.projectName_myPortfolio'
                      )}
                    </p>
                    <Image
                      thumbnail
                      src={myPortfolio}
                      style={{
                        maxHeight: '150px',
                        objectFit: 'scale-down',
                        width: '100%',
                      }}
                    />
                    <p className="resume_projectsSubtitle">
                      {a(
                        'frontend.local.projects.cardDate.cardText.myPortfolio'
                      )}
                    </p>
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.projectFeatures')}
                    </p>
                    {myPortfolioFeature.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                    <p className="resume_tech">
                      {a('frontend.local.resume.sideProjects.toolsUsed')}
                    </p>
                    {myPortfolioSkill.map((data, id) => (
                      <div className="resume_bullet">
                        <ul key={id}>
                          <span key={id}>{data}</span>
                        </ul>
                      </div>
                    ))}
                  </Col>
                </Row>
              </Container>
              <Container>
                <div className="resume_subtitle">
                  {a('frontend.local.resume.skills.blog')}
                </div>
                <div>Tech note</div>
                <div>https://0529bill.github.io/bywater-blog/</div>
                <div style={{ marginTop: '15px' }}>Medium Tech blog</div>
                <div>https://medium.com/@bywater529</div>
              </Container>
              <Container>
                <div className="resume_subtitle">
                  {a('frontend.local.resume.skills.volunteering')}
                </div>
                <div>
                  {a('frontend.local.resume.skills.volunteering.description')}
                  <p style={{ marginBottom: '0px' }}>
                    {a('frontned.local.resume.skills.volunteering.title')}
                  </p>
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
            </Col>
          </Row>
        </Container>
        <Modal show={openModal} onHide={() => setOpenModal(false)} />
      </Container>
    </>
  );
}

export default Resume;
