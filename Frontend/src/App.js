// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './Components/Login';
// import AllRoutes from './Routes/AllRoutes';
// import AdminRoutes from './Routes/AdminRoutes';
// import './App.css';
// import Header from './Components/Header';
// import Home from './Components/HomePages/Home';
// import Dashboard from './Admin/Dashboard';
// const getUserRole = () => {
//   return localStorage.getItem('role');
// };

// function App() {
//   const [role, setRole] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const role = getUserRole();
//     setRole(role);
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Router>
//       <Header/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/*" element={<AppRoutes role={role} />} />
//         <Route path="*" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<Login />} />
      
//       </Routes>
//     </Router>
//   );
// }

// const AppRoutes = ({ role }) => {
//   if (!role) {
//     return <Navigate to="/login" />;
//   }

//   if (role === 'Admin' || role === 'Instructor') {
//     return <AdminRoutes />;
//   } else {
//     return < AllRoutes/>;
//   }
// };

// export default App;


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import AllRoutes from './Routes/AllRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import './App.css';
import Header from './Components/Header';
import Home from './Components/HomePages/Home';
import SignUp from './Components/SignUp';

const getUserRole = () => {
  return localStorage.getItem('role');
};

function App() {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedRole = getUserRole();
    setRole(storedRole);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      
      <Routes>
        <Route path="/login" element={<Login onClose={() => {}} />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/" element={<Home />} />
        <Route path="*" element={<AppRoutes role={role} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

const AppRoutes = ({ role }) => {
  if (!role) {
    return <Navigate to="/login" />;
  }

  if (role === 'Admin' || role === 'Instructor') {
    return <AdminRoutes />;
  } else {
    return <AllRoutes />;
  }
};

export default App;
