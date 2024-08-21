import React, { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

function IntegrationTest() {
    const [code, setCode] = useState(`function multiplyAndDivide(a, b, c) {
  const product = a * b;
  return product / c;
}`);

    const [result, setResult] = useState('');

    const handleRun = () => {
        try {
            const multiplyAndDivide = new Function('return ' + code)();
            const testResult = multiplyAndDivide(4, 5, 2);
            setResult(`Result: ${testResult}`);
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Integration Test</h2>
            <p>Edit and run the code below to test the integration of two functions:</p>
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
            <p>Try modifying the final division to return the remainder (modulo). Replace <code>product / c</code> with <code>product % c</code> and observe how this affects the result.</p>
        </div>
    );
}

export default IntegrationTest;
