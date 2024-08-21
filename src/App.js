import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComponentTest from './components/ComponentTest';
import IntegrationTest from './components/IntegrationTest';
import SystemTest from './components/SystemTest';
import SystemIntegrationTest from './components/SystemIntegrationTest';
import AcceptanceTest from './components/AcceptanceTest';

function App() {
    return (
        <Router>
            <div>
                <h1>Welcome to the Test Levels Practice Site</h1>
                <ul>
                    <li><a href="/component-test">Component Test</a></li>
                    <li><a href="/integration-test">Integration Test</a></li>
                    <li><a href="/system-test">System Test</a></li>
                    <li><a href="/system-integration-test">System Integration Test</a></li>
                    <li><a href="/acceptance-test">Acceptance Test</a></li>
                </ul>
                <Routes>
                    <Route path="/component-test" element={<ComponentTest />} />
                    <Route path="/integration-test" element={<IntegrationTest />} />
                    <Route path="/system-test" element={<SystemTest />} />
                    <Route path="/system-integration-test" element={<SystemIntegrationTest />} />
                    <Route path="/acceptance-test" element={<AcceptanceTest />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
