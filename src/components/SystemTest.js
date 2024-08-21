import React, { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

function SystemTest() {
    const [code, setCode] = useState(`function processTransaction(balance, amount, type) {
  if (type === 'deposit') {
    return balance + amount;
  } else if (type === 'withdrawal' && balance >= amount) {
    return balance - amount;
  } else {
    return 'Error: Insufficient funds';
  }
}`);

    const [result, setResult] = useState('');

    const handleRun = () => {
        try {
            const processTransaction = new Function('return ' + code)();
            const testResult = processTransaction(100, 50, 'withdrawal');
            setResult(`Result: ${testResult}`);
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>System Test</h2>
            <p>Edit and run the code below to test the system transaction:</p>
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
            <p>Try simulating a withdrawal error by changing the transaction type from <code>'withdrawal'</code> to <code>'deposit'</code> or by modifying the amount to be greater than the balance.</p>
        </div>
    );
}

export default SystemTest;
