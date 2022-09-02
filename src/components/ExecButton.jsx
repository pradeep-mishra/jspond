import playButton from '../assets/play.png';
import { execFunc, removeComment } from '../helper';

const ExecButton = ({ code, setResult, setPlayClicked }) => {
  let output = '';
  const addToResult = (lType, ...args) => {
    output = `${output}\n[console]: ${args.join('   ')}`;
    setResult(output);
  };
  const execCode = async () => {
    let codeVal = removeComment(code);
    if (!codeVal) {
      return;
    }
    setPlayClicked((c) => c + 1);
    setResult('');
    let response = await execFunc(codeVal, addToResult);
    //console.log('response is', response);
    response =
      typeof response !== 'string'
        ? JSON.stringify(response, null, 2)
        : response;
    setResult(`${output}\n${response ?? ''}`);
  };
  return (
    <div className='jspond-body-play'>
      <img src={playButton} onClick={execCode} />
    </div>
  );
};

export default ExecButton;
