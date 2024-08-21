import React, { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

function ComponentTest() {
    const [code, setCode] = useState(`function addNumbers(a, b) {
  return a + b;
}`);

    const [result, setResult] = useState('');

    const handleRun = () => {
        try {
            const addNumbers = new Function('return ' + code)();
            const testResult = addNumbers(2, 3);
            setResult(`Result: ${testResult}`);
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Component Test</h2>
            <p>Edit and run the code below:</p>
            <div className="editor-container">
                <Editor
                    value={code}
                    onValueChange={(newCode) => setCode(newCode)}
                    highlight={(code) => highlight(code, languages.js)}
                    padding={10}
                    className="code-editor"
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 14
                    }}
                />
            </div>
            <button onClick={handleRun}>Run Code</button>
            <div className="result">{result}</div>
            <h3>Instructions:</h3>
            <p>Try modifying the <code>addNumbers</code> function to subtract instead of add. Replace <code>a + b</code> with <code>a - b</code> and observe the change in the result.</p>
        </div>
    );
}

export default ComponentTest;
