const Result = ({ result, playClicked }) => {
  return (
    <div className='jspond-result'>
      <div className='jspond-result-header'>
        Output: ({playClicked})
        <span className='jspond-result-header-hint'>
          (Cmd/Ctrl + Enter to execute)
        </span>
      </div>
      <div className='jspond-result-content'>
        <pre>{result}</pre>
      </div>
    </div>
  );
};

export default Result;
