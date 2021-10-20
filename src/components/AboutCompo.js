import React from 'react';
import { Badge, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';

const AboutComponent = () => (
  <div>
    {' '}
    <Header total="" title="About US" carteName="globe" />
    <Container className="countries-container">
      <div>
        <h1 className="my-4 shadow">About COVID19 API</h1>
        <p>
          The full API dataset is updated each day between
          {' '}
          <strong> 1PM </strong>
          {' '}
          and
          <strong> 3PM </strong>
          {' '}
          CET with additional updates throughout the day.
        </p>
        <p>Data is provided by the following institutions:</p>
        <ul>
          <li>
            <a href="https://systems.jhu.edu/research/public-health/ncov/">Johns Hopkins University</a>
          </li>
          <li>
            <a href="https://github.com/pcm-dpc/COVID-19">Dipartimento della Protezione Civile of Italy</a>
          </li>
          <li>
            <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Situationsberichte/Gesamt.html">Robert Koch Institute of Germany</a>
          </li>
          <li>
            <a href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov/situacionActual.htm">Ministry of Health Spain</a>
          </li>
          <li>
            <a href="https://www.santepubliquefrance.fr/dossiers/coronavirus-covid-19">Santé publique France</a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="my-4 shadow">About Developer</h1>
        <p>
          Leonardo de Andrade (aka Leo) is an  IT Manager,  Software Developer,
          and degree in software engineering and an MBA in Business Management
          focused on IT. He also is a very passionate and multifunctional professional.
          Based in Belo Horizonte/MG, Brazil, and available to be around the world.

        </p>
        <p>
          <FontAwesomeIcon icon={faLink} className="mx-2" />
          You can follow me on :

        </p>
        <ul className="d-flex justify-content-between p-0">
          <li>
            <Badge bg="warning">
              <FontAwesomeIcon icon={faGithub} className="mx-1 text-dark" />
              <a href="https://github.com/leonardoeng13" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">Github</a>
            </Badge>
          </li>
          <li>
            <Badge bg="warning">
              <FontAwesomeIcon icon={faFacebook} className="mx-1 text-primary" />
              <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">Facebook</a>
            </Badge>
          </li>
          <li>
            <Badge bg="warning">
              <FontAwesomeIcon icon={faLinkedin} className="mx-1 text-info" />
              <a href="https://www.linkedin.com/in/leonardodeandrade/?locale=en_US" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">LinkedIn</a>
            </Badge>
          </li>
        </ul>
      </div>
      <p className="text-monospace warning">
        All Copyright &copy; and Thanks For
        <a href="https://covid19tracking.narrativa.com/index_en.html" className="text-decoration-none"> Narrativa API</a>
      </p>
    </Container>
  </div>
);

export default AboutComponent;
