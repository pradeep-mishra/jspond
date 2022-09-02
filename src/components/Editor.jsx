//import React from 'react';
import AceEditor from 'react-ace';
//
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
const Editor = ({ code, setCode }) => {
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
    />
  );
};

export default Editor;
