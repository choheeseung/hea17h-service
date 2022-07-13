import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import SignupComplete from './pages/Signup/SignupComplete';
import SignupDetail from './pages/Signup/SignupDetail';
import Diet from './pages/Diet/Diet';
import DietSearch from './pages/Diet/DietSearch';
import Profile from './pages/Profile/Profile';
import ProfileUpdate from './pages/Profile/ProfileUpdate';
import Coaching from './pages/Expert/Coaching';
import CoachingWrite from './pages/Expert/CoachingWrite';
import CoachingRead from './pages/Expert/CoachingRead';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup/complete" element={<SignupComplete />} />
                    <Route path="/signup/detail" element={<SignupDetail />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/update" element={<ProfileUpdate />} />
                    <Route path="/diet" element={<Diet />} />
                    <Route path="/diet/search" element={<DietSearch />} />
                    <Route path="/coaching" element={<Coaching />} />
                    <Route path="/coachingWrite/:id" element={<CoachingWrite />} />
                    <Route path="/coachingRead/:id" element={<CoachingRead />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
