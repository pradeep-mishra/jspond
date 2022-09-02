import AceEditor from 'react-ace';
import { execFunc, removeComment } from '../helper';
//
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
const Editor = ({ code, setCode, setResult, setPlayClicked }) => {
  const execCode = async (e) => {
    //console.log('e is', e.getValue());
    //window.edx = e;
    let codeVal = removeComment(e.getValue());
    if (!codeVal) {
      return;
    }
    //console.log('executing', codeVal);
    setPlayClicked((c) => c + 1);
    let response = await execFunc(codeVal);
    //console.log('response is', response);
    response =
      typeof response !== 'string'
        ? JSON.stringify(response, null, 2)
        : response;
    setResult(response);
  };
  return (
    <AceEditor
      placeholder='put your js snippet here'
      mode='javascript'
      theme='monokai'
      name='jspond'
      onChange={setCode}
      width='auto'
      height='100%'
      //maxLines={20}
      //minLines={20}
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      setOptions={{
        showLineNumbers: true,
        tabSize: 2
      }}
      commands={[
        {
          name: 'executeSnippet',
          bindKey: { win: 'Ctrl-Enter', mac: 'Command-Return' },
          exec: execCode
        }
      ]}
    />
  );
};

export default Editor;
