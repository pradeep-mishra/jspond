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

const execFunc = async (code) => {
  //console.log('code is', code);
  try {
    if (code.includes('await ')) {
      const res = await eval(`
        (async function(){
         try{
          ${code}
         }catch(e){
          return e
         }
        })()
      `);
      if (res instanceof Error) {
        return formatErrorResponse(res);
      }
      return res;
    } else if (code.match(/;\s*return\s+|^\s*return\s+/gm)) {
      console.log('return found');
      return eval(`
        (function(){
         try{
          ${code}
         }catch(e){
          return e
         }
        })()
      `);
    } else {
      return eval(code);
    }
  } catch (e) {
    return formatErrorResponse(e);
  }
};

export { execFunc, removeComment, formatErrorResponse };