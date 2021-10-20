/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Region = ({
  name,
  todayConfirmed,
  todayNewConfirmed,
  todayNewDeaths,
  item,
}) => {
  const numberFormat = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <motion.div
      className={`region-wrapper d-flex ${item % 2 === 0 ? 'bgPrimary' : 'bgSecondary'}`}
      initial={{
        opacity: 0,
        translateY: 50,
      }}
      animate={{
        opacity: 1.2,
        translateY: 0,
      }}
      transition={{
        duration: 0.3,
        delay: item * 0.25,
      }}
      data-testid="div-test"
    >
      <div className="region-name">
        <h2 className="p-0" data-testid={name}>{name}</h2>
      </div>
      <div className="d-flex align-items-center text-align-center">
        <div className="region-body d-flex flex-column align-items-center">
          <p data-content={`${numberFormat(todayNewConfirmed)} Cases today`} className="m-0">{`${numberFormat(todayNewConfirmed)} Cases today`}</p>
          <p data-content={`${numberFormat(todayNewDeaths)} Deaths today`} className="m-0">{`${numberFormat(todayNewDeaths)} Deaths today`}</p>
          <p data-content={`${numberFormat(todayConfirmed)} Total Cases`} className="m-0">{`${numberFormat(todayConfirmed)} Total Cases`}</p>
        </div>
        <FontAwesomeIcon icon={faArrowCircleRight} className="region-icon" />
      </div>
    </motion.div>
  );
};

export default Region;
