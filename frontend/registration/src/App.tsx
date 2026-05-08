import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './components/Registration/RegistrationPage';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardMain from './components/Dashboard/DashboardMain';
import Candidates from './components/Candidates/Candidates'; 
import CandidatesProfile from './components/Candidates/CandidatesProfile';
import Vakancies from './components/Vacancies/Vacancies';
import DescriptionPage from './components/Description/Description';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegistrationPage />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<DashboardMain />} />
                    <Route path="candidates" element={<Candidates />} />
                    <Route path="candidates/:id" element={<CandidatesProfile />} />
                    <Route path="vacancies" element={<Vakancies />} />   
                    <Route path="description/:id" element={<DescriptionPage />} />   

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

