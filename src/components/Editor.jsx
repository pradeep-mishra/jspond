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
      //onLoad={this.onLoad}
      onChange={setCode}
      width='100%'
      fontSize={16}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      maxLines={20}
      minLines={20}
      value={code}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2
      }}
    />
  );
};

export default Editor;
