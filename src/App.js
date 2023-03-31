import { runScript } from "./pyodide";
import { AppContainer, PyodideButton } from "./styledComponent";
const App = () => {
  const handleSimplePythonCode = async () => {
    const start = performance.now();
    console.clear();
    await runScript(
      '{"code_content":"\\"import time\\\\n\\\\nstart_time = time.process_time()\\\\n\\\\n# Python code for implementation of Naive Recursive\\\\n# approach\\\\ndef isPalindrome(x):\\\\n\\\\treturn x == x[::-1]\\\\n\\\\n\\\\ndef minPalPartion(string, i, j):\\\\n\\\\tif i >= j or isPalindrome(string[i:j + 1]):\\\\n\\\\t\\\\treturn 0\\\\n\\\\tans = float(\'inf\')\\\\n\\\\tfor k in range(i, j):\\\\n\\\\t\\\\tcount = (\\\\n\\\\t\\\\t\\\\t1 + minPalPartion(string, i, k)\\\\n\\\\t\\\\t\\\\t+ minPalPartion(string, k + 1, j)\\\\n\\\\t\\\\t)\\\\n\\\\t\\\\tans = min(ans, count)\\\\n\\\\treturn ans\\\\n\\\\n\\\\ndef main():\\\\n\\\\tstring = \\\\\\"ababbbabbababa\\\\\\"\\\\n\\\\tprint(\\\\n\\\\t\\\\\\"Min cuts needed for Palindrome Partitioning is \\\\\\",\\\\n\\\\tminPalPartion(string, 0, len(string) - 1),\\\\n\\\\t)\\\\n\\\\nif __name__ == \\\\\\"__main__\\\\\\":\\\\n\\\\tmain()\\\\n\\\\n# This code is contributed by itsvinayak\\\\n\\\\n\\\\nend_time = time.process_time()\\\\n\\\\nelapsed_time = end_time - start_time\\\\nprint(f\\\\\\"Elapsed time: {elapsed_time} seconds\\\\\\")\\"","code_language":"PYTHON39","inputs":["\\"\\""]}'
    );
    const end = performance.now();
    console.log((end - start) / 1000 + "s");
  };
  const handlePythonCodeUserInputs = async () => {
    const start = performance.now();
    console.clear();
    await runScript(
      '{"code_content":"\\"\\\\n# Taking input from the user\\\\nname = input(\\\\\\"Enter your name: \\\\\\")\\\\n \\\\n# Output\\\\nprint(\\\\\\"Hello, \\\\\\" + name)\\\\nprint(type(name))\\"","code_language":"PYTHON38_AIML","inputs":["\\"Rupesh\\""]}'
    );
    const end = performance.now();
    console.log((end - start) / 1000 + "s");
  };
  const handlePythonCodeWithoutUserInputs = async () => {
    const start = performance.now();
    console.clear();
    await runScript(
      '{"code_content":"\\"\\\\n# Taking input from the user\\\\nname = input(\\\\\\"Enter your name: \\\\\\")\\\\n \\\\n# Output\\\\nprint(\\\\\\"Hello, \\\\\\" + name)\\\\nprint(type(name))\\"","code_language":"PYTHON38_AIML","inputs":["\\"\\""]}'
    );
    const end = performance.now();
    console.log((end - start) / 1000 + "s");
  };
  const handlePythonCodeWithThirdPartyPackages = async () => {
    const start = performance.now();
    console.clear();
    await runScript(
      '{"code_content":"\\"import math\\\\n \\\\n# radius of the circle\\\\nr = 4\\\\n \\\\n# value of pie\\\\npie = math.pi\\\\n \\\\n# area of the circle\\\\nprint(pie * r * r)\\"","code_language":"PYTHON38_AIML","inputs":["\\"\\""]}'
    );
    const end = performance.now();
    console.log((end - start) / 1000 + "s");
  };
  const handlePythonCodeWithDecorators = async () => {
    const start = performance.now();
    console.clear();
    await runScript(
      '{"code_content":"\\"def hello_decorator(func):\\\\n\\\\tdef inner1(*args, **kwargs):\\\\n\\\\t\\\\t\\\\n\\\\t\\\\tprint(\\\\\\"before Execution\\\\\\")\\\\n\\\\t\\\\t\\\\n\\\\t\\\\t# getting the returned value\\\\n\\\\t\\\\treturned_value = func(*args, **kwargs)\\\\n\\\\t\\\\tprint(\\\\\\"after Execution\\\\\\")\\\\n\\\\t\\\\t\\\\n\\\\t\\\\t# returning the value to the original frame\\\\n\\\\t\\\\treturn returned_value\\\\n\\\\t\\\\t\\\\n\\\\treturn inner1\\\\n\\\\n\\\\n# adding decorator to the function\\\\n@hello_decorator\\\\ndef sum_two_numbers(a, b):\\\\n\\\\tprint(\\\\\\"Inside the function\\\\\\")\\\\n\\\\treturn a + b\\\\n\\\\na, b = 1, 2\\\\n\\\\n# getting the value through return of the function\\\\nprint(\\\\\\"Sum =\\\\\\", sum_two_numbers(a, b))\\\\n\\"","code_language":"PYTHON38_AIML","inputs":["\\"\\""]}'
    );
    const end = performance.now();
    console.log((end - start) / 1000 + "s");
  };
  const handlePythonCodeWithErrors = async () => {
    const start = performance.now();
    console.clear();
    const result = await runScript(
      '{"code_content":"\\"x = 5\\\\ny = \\\\\\"hello\\\\\\"\\\\nz = x + y # Raises a TypeError: unsupported operand type(s) for +: \'int\' and \'str\'\\\\n\\"","code_language":"PYTHON38_AIML","inputs":["\\"\\""]}'
    );
    const end = performance.now();
    console.log((end - start) / 1000 + "s");
  };
  const handlePythonCodeWithException = async () => {
    const start = performance.now();
    console.clear();
    await runScript(
      '{"code_content":"\\"# Program to handle multiple errors with one\\\\n# except statement\\\\n# Python 3\\\\n\\\\ndef fun(a):\\\\n\\\\tif a < 4:\\\\n\\\\n\\\\t\\\\t# throws ZeroDivisionError for a = 3\\\\n\\\\t\\\\tb = a/(a-3)\\\\n\\\\n\\\\t# throws NameError if a >= 4\\\\n\\\\tprint(\\\\\\"Value of b = \\\\\\", b)\\\\n\\\\t\\\\ntry:\\\\n\\\\tfun(3)\\\\n\\\\tfun(5)\\\\n\\\\n# note that braces () are necessary here for\\\\n# multiple exceptions\\\\nexcept ZeroDivisionError:\\\\n\\\\tprint(\\\\\\"ZeroDivisionError Occurred and Handled\\\\\\")\\\\nexcept NameError:\\\\n\\\\tprint(\\\\\\"NameError Occurred and Handled\\\\\\")\\\\n\\"","code_language":"PYTHON38_AIML","inputs":["\\"\\""]}'
    );
    const end = performance.now();
    console.log((end - start) / 1000 + "s");
  };
  const handlePythonCodeWithArguments = async () => {
    const start = performance.now();
    console.clear();
    await runScript(
      '{"code_content":"\\"# Python program to demonstrate\\\\n# command line arguments\\\\n\\\\n\\\\nimport sys\\\\n\\\\n# total arguments\\\\nn = len(sys.argv)\\\\nprint(\\\\\\"Total arguments passed:\\\\\\", n)\\\\n\\\\n# Arguments passed\\\\nprint(\\\\\\"\\\\\\\\nName of Python script:\\\\\\", sys.argv[0])\\\\n\\\\nprint(\\\\\\"\\\\\\\\nArguments passed:\\\\\\", end = \\\\\\" \\\\\\")\\\\nfor i in range(1, n):\\\\n\\\\tprint(sys.argv[i], end = \\\\\\" \\\\\\")\\\\n\\\\t\\\\n# Addition of numbers\\\\nSum = 0\\\\n# Using argparse module\\\\nfor i in range(1, n):\\\\n\\\\tSum += int(sys.argv[i])\\\\n\\\\t\\\\nprint(\\\\\\"\\\\\\\\n\\\\\\\\nResult:\\\\\\", Sum)\\\\n\\"","code_language":"PYTHON39","inputs":["\\"\\""]}'
    );
    const end = performance.now();
    console.log((end - start) / 1000 + "s");
  };
  return (
    <>
      <AppContainer>
        <PyodideButton onClick={handleSimplePythonCode}>
          Run Simple Python Code
        </PyodideButton>
        <PyodideButton onClick={handlePythonCodeUserInputs}>
          Run Code with User Inputs
        </PyodideButton>
        <PyodideButton onClick={handlePythonCodeWithoutUserInputs}>
          Run Code without User Inputs
        </PyodideButton>
        <PyodideButton onClick={handlePythonCodeWithThirdPartyPackages}>
          Run the code with python third party packages
        </PyodideButton>
        <PyodideButton onClick={handlePythonCodeWithDecorators}>
          Run the code with decorators
        </PyodideButton>
        <PyodideButton onClick={handlePythonCodeWithErrors}>
          Handling the errors
        </PyodideButton>
        <PyodideButton onClick={handlePythonCodeWithException}>
          exception handling
        </PyodideButton>
        <PyodideButton onClick={handlePythonCodeWithArguments}>
          Run Code with Command Line
        </PyodideButton>
      </AppContainer>
    </>
  );
};
export default App;
