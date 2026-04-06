import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './components/Registration/RegistrationPage';
import Dashboard from './components/Dashboard/Dashboarg';
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegistrationPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;