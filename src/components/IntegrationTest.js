import React, { useState } from 'react';

function IntegrationTest() {
    const [result, setResult] = useState('');

    // Two simple components
    const multiplyNumbers = (a, b) => a * b;
    const divideNumbers = (a, b) => b !== 0 ? a / b : 'Error';

    const handleTest = () => {
        const integrationResult = multiplyNumbers(4, 5) === 20 && divideNumbers(20, 4) === 5 ? 'Success' : 'Fail';
        setResult(integrationResult);
    };

    return (
        <div>
            <h2>Integration Test</h2>
            <p>In this exercise, you will test the integration of two components.</p>
            <button onClick={handleTest}>Run Integration Test</button>
            <p>Result: {result}</p>
            <h3>Exercise:</h3>
            <p>Introduce a bug in one of the functions and observe the result when you rerun the test.</p>
        </div>
    );
}

export default IntegrationTest;
