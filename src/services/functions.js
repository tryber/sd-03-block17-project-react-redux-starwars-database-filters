import React from 'react';

export const renderOptions = (optionsList) => (
  ['', ...optionsList].map((option) => <option key={option} value={option}>{option}</option>)
);
