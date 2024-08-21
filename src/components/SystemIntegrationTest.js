import React, { useState } from 'react';

function SystemIntegrationTest() {
    const [result, setResult] = useState('');

    // Simulated API response
    const mockApi = (amount) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (amount > 0) resolve('Payment Success');
                else resolve('Payment Failed');
            }, 1000);
        });
    };

    const handleTest = async () => {
        const response = await mockApi(100);
        const integrationResult = response === 'Payment Success' ? 'Success' : 'Fail';
        setResult(integrationResult);
    };

    return (
        <div>
            <h2>System Integration Test</h2>
            <p>In this exercise, you will test the system's integration with an external API.</p>
            <button onClick={handleTest}>Run System Integration Test</button>
            <p>Result: {result}</p>
            <h3>Exercise:</h3>
            <p>Change the API response or simulate an API failure to observe how the system handles it.</p>
        </div>
    );
}

export default SystemIntegrationTest;
