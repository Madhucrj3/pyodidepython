const runScript = async (overallCode) => {
  let input = [];
  function createStdin() {
    let inputIndex = 0;
    function stdin() {
      if (inputIndex < input.length) {
        let character = input[inputIndex];
        inputIndex++;
        return character;
      } else {
        throw new Error("Input value is empty");
      }
    }
    return stdin;
  }
  const handleOutput = (msg) => {
    console.log(msg);
  };
  const overallParseCode = JSON.parse(overallCode);
  const code_content = JSON.parse(overallParseCode.code_content);

  const code_input = JSON.parse(overallParseCode.inputs);
  if (code_input.length > 0) {
    const myArray = code_input.split("\n");
    input = myArray;
  }
  const pyodide = await window.loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.22.1/full/",
    args: ["1", "2", "3"],
    stdin: createStdin(),
    stdout: (msg) => handleOutput(msg),
    stderr: (msg) => console.log(msg),
  });
  let result = "";
  try {
    result = await pyodide.runPythonAsync(code_content);
  } catch (error) {
    console.log(error);
  }
  //console.log(result);
};
export { runScript };
