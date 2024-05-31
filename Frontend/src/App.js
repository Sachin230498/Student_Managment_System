
import './App.css';
import Login from '../src/Components/Login'
import SignUp from '../src/Components/SignUp'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/HomePages/Home';
import AllRoutes from './Routes/AllRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <>
    {/* <Login/> */}
    {/* <SignUp/> */}
    {/* <Header/> */}
    {/* <Home/> */}
    {/* <Footer/> */}
    <AdminRoutes/>
  
    
    </>

  );
}

export default App;
