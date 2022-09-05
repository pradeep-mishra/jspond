const removeComment = (code) => {
  code = code.replace(/\/\*[\s\S]*\*\//g, '').trim();
  code = code.replace(/^\s*\/\/.*$/gm, '').trim();
  //console.log('code is', code);
  return code;
};

const formatErrorResponse = (e) => {
  return `${e.toString()}\n${e.stack.substr(
    0,
    e.stack.indexOf('ExecButton.jsx') + 14
  )}`;
};
const log = console.log.bind(console);
const warn = console.log.bind(console);
const error = console.log.bind(console);
const info = console.log.bind(console);

const execFunc = async (code, putText) => {
  //console.log('code is', code);
  //code = code.replace(/\“/gm, '"').replace(/\‘/gm, "'");
  const context = {
    console: {
      log: (...args) => {
        putText('log', ...args);
      },
      info,
      warn,
      error,
      _log: log
    }
  };
  try {
    if (code.includes('await ')) {
      const res = await function () {
        return eval(`
        (async function(self){
         console = self.console; 
         try{
          ${code}
         }catch(e){
          return e
         }
        })(this)
      `);
      }.call(context);
      if (res instanceof Error) {
        return formatErrorResponse(res);
      }
      return res;
    } else if (code.match(/;\s*return\s+|^\s*return\s+/gm)) {
      return function () {
        return eval(`
        (function(self){
         console = self.console; 
         try{
          ${code}
         }catch(e){
          return e
         }
        })(this)
      `);
      }.call(context);
    } else {
      return function (code) {
        return eval(code);
      }.call(context, `console = this.console;\n${code} `);
    }
  } catch (e) {
    return formatErrorResponse(e);
  }
};

export { execFunc, removeComment, formatErrorResponse };
