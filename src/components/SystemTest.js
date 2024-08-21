import React, { useState } from 'react';

function SystemTest() {
    const [result, setResult] = useState('');

    // A simple system simulation combining multiple functions
    const performTransaction = (balance, amount, type) => {
        if (type === 'deposit') return balance + amount;
        if (type === 'withdrawal' && balance >= amount) return balance - amount;
        return 'Error';
    };

    const handleTest = () => {
        const initialBalance = 100;
        const newBalance = performTransaction(initialBalance, 50, 'withdrawal');
        const systemResult = newBalance === 50 ? 'Success' : 'Fail';
        setResult(systemResult);
    };

    return (
        <div>
            <h2>System Test</h2>
            <p>In this exercise, you will perform a system test by simulating a transaction.</p>
            <button onClick={handleTest}>Run System Test</button>
            <p>Result: {result}</p>
            <h3>Exercise:</h3>
            <p>Modify the transaction function to simulate a system failure and see how it affects the test.</p>
        </div>
    );
}

export default SystemTest;
