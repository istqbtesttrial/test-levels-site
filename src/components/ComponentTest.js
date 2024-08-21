import React, { useState } from 'react';

function ComponentTest() {
    const [result, setResult] = useState('');

    // Simple component function to be tested
    const addNumbers = (a, b) => a + b;

    const handleTest = () => {
        const testResult = addNumbers(2, 3) === 5 ? 'Success' : 'Fail';
        setResult(testResult);
    };

    return (
        <div>
            <h2>Component Test</h2>
            <p>In this exercise, you will test a simple component function.</p>
            <button onClick={handleTest}>Run Component Test</button>
            <p>Result: {result}</p>
            <h3>Exercise:</h3>
            <p>Try modifying the <code>addNumbers</code> function to introduce a bug, then test again.</p>
        </div>
    );
}

export default ComponentTest;
