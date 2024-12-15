import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
// import Home from './pages/employee/home/Home.jsx';
import Logout from "./pages/auth/Logout.jsx";
import Success from "./pages/auth/Success.jsx";
import NotFound from "./components/layout/NotFound.jsx";
// import Landing from './pages/landing/Layout.jsx';
import Job from "./pages/landing/JobSeeker/job/Job.jsx";
import About from "./pages/landing/JobSeeker/about/About.jsx";
import Applicant from "./pages/landing/JobSeeker/applicant/Applicant.jsx";
import Profile from "./pages/users/JobSeeker/profile/Profile.jsx";
import Applied from "./pages/users/JobSeeker/applied/Applied.jsx";
import Settings from "./pages/users/JobSeeker/settings/Settings.jsx";
// import Applicant from './pages/employee/applicant/Applicant.jsx';
// import Job from './pages/employee/job/Job.jsx';

import EmployeeProfile from "./pages/users/Employee/profile/Profile.jsx";
import EmployeeApplicant from "./pages/users/Employee/applicant/Applicant.jsx";
import EmployeeCompany from "./pages/users/Employee/company/Company.jsx";
import EmployeeSettings from "./pages/users/Employee/settings/Settings.jsx";


function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}

        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<Register />}></Route>
        <Route path="/auth/logout" element={<Logout />}></Route>
        <Route path="/auth/success" element={<Success />}></Route>

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />}></Route>

        {/* Landing Job Seeker */}
        <Route path="/" element={<About />}></Route>
        <Route path="/applicant-list" element={<Applicant />}></Route>
        <Route path="/job-listing" element={<Job />}></Route>

        {/* Job Seeker Dashboard */}
        <Route path="/users/profile" element={<Profile />}></Route>
        <Route path="/users/job-applied" element={<Applied />}></Route>
        <Route path="/users/settings" element={<Settings />}></Route>

        {/* Employee Dashboard */}
        <Route path="/users/employee/profile" element={<EmployeeProfile />}></Route>
        <Route path="/users/employee/job-applicant" element={<EmployeeApplicant />}></Route>
        <Route path="/users/employee/company" element={<EmployeeCompany />}></Route>
        <Route path="/users/employee/settings" element={<EmployeeSettings />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
