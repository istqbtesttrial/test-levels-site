import React, { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

function SystemIntegrationTest() {
    const [code, setCode] = useState(`async function simulateApi(amount) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (amount > 0) resolve('Payment Success');
      else resolve('Payment Failed');
    }, 1000);
  });
}`);

    const [result, setResult] = useState('');

    const handleRun = async () => {
        try {
            const simulateApi = new Function('return ' + code)();
            const testResult = await simulateApi(100);
            setResult(`Result: ${testResult}`);
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>System Integration Test</h2>
            <p>Edit and run the code below to test the integration with an API:</p>
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
            <p>Try simulating a payment failure by changing the amount passed to the <code>simulateApi</code> function. For example, try with an amount of <code>-10</code> to see the result.</p>
        </div>
    );
}

export default SystemIntegrationTest;
