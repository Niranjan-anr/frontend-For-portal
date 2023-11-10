import React from 'react';

const SuccessMessage = ({ isSubmitting }) => {
  if (isSubmitting) {
    return <div className="success">Submitting...</div>;
  }
  return null;
};

export default SuccessMessage;
