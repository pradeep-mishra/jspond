import { useState } from 'preact/hooks';
import Editor from './components/Editor';
import ExecButton from './components/ExecButton';
import Header from './components/Header';
import Result from './components/Result';
import { useExecResultStore, useJsPondStore } from './store/store';

export function App() {
  const code = useJsPondStore((state) => state.code);
  const setCode = useJsPondStore((state) => state.setCode);
  const result = useExecResultStore((state) => state.result);
  const setResult = useExecResultStore((state) => state.setResult);
  const [playClicked, setPlayClicked] = useState(0);
  return (
    <div className='jspond-wrapper'>
      <Header />
      <div className='jspond-body'>
        <div className='jspond-editor'>
          <Editor
            code={code}
            setCode={setCode}
            setResult={setResult}
            setPlayClicked={setPlayClicked}
          />
          <ExecButton
            code={code}
            setResult={setResult}
            setPlayClicked={setPlayClicked}
          />
        </div>
        <div className='jspond-result'>
          <Result result={result} playClicked={playClicked} />
        </div>
      </div>
    </div>
  );
}
