import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './components/Registration/RegistrationPage';
import Dashboard from './components/Dashboard/Dashboarg';
import DashboardMain from './components/Dashboard/DashboardMain';
import Candidates from './components/Candidates/Candidates'; 
import CandidatesProfile from './components/Candidates/CandidatesProfile';



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegistrationPage />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<DashboardMain />} />
                    <Route path="candidates" element={<Candidates />} />
                    <Route path="candidates/:id" element={<CandidatesProfile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;