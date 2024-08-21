import React, { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

function AcceptanceTest() {
    const [code, setCode] = useState(`function validateLogin(username, password) {
  if (username === 'admin' && password === 'password123') {
    return 'Login Successful';
  } else {
    return 'Login Failed';
  }
}`);

    const [result, setResult] = useState('');

    const handleRun = () => {
        try {
            const validateLogin = new Function('return ' + code)();
            const testResult = validateLogin('admin', 'password123');
            setResult(`Result: ${testResult}`);
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Acceptance Test</h2>
            <p>Edit and run the code below to test user login validation:</p>
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
            <p>Try changing the username or password values to cause a login failure. For example, change <code>password123</code> to <code>wrongpassword</code>.</p>
        </div>
    );
}

export default AcceptanceTest;
