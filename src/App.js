import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import ProjectList from './components/ProjectsList';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />}></Route>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/projects-list' element={<ProjectList />}></Route>
        <Route path='/projects-details' element={<ProjectDetails />}></Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
