import React, { useState } from 'react';

function AcceptanceTest() {
    const [result, setResult] = useState('');

    // User acceptance test based on requirements
    const validateLogin = (username, password) => {
        return username === 'admin' && password === 'password123' ? 'Login Successful' : 'Login Failed';
    };

    const handleTest = () => {
        const acceptanceResult = validateLogin('admin', 'password123') === 'Login Successful' ? 'Success' : 'Fail';
        setResult(acceptanceResult);
    };

    return (
        <div>
            <h2>Acceptance Test</h2>
            <p>In this exercise, you will perform an acceptance test based on user requirements.</p>
            <button onClick={handleTest}>Run Acceptance Test</button>
            <p>Result: {result}</p>
            <h3>Exercise:</h3>
            <p>Modify the validation logic to simulate a requirement change or a security issue.</p>
        </div>
    );
}

export default AcceptanceTest;
