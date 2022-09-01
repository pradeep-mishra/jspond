import React from 'react';

const Result = ({ result, playClicked }) => {
  return (
    <div className='jspond-result'>
      <div className='jspond-result-header'>Result: ({playClicked})</div>
      <div className='jspond-result-content'>
        <pre>{result}</pre>
      </div>
    </div>
  );
};

export default Result;
