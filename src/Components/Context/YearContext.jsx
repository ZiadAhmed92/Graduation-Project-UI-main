// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const YearContext = createContext();

export const useYear = () => useContext(YearContext);

export const YearProvider = ({ children }) => {
  const [year, setYear] = useState({ Year: {} });

  return (
    <YearContext.Provider value={{ year, setYear }}>
      {children}
    </YearContext.Provider>
  );
};

YearProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
