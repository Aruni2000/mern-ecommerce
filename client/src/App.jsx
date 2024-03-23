import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Sellyourspices from './pages/Sellyourspices';
import Header from './components/Header';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sell-your-spices' element={<Sellyourspices />} />
        <Route element={<PrivateRoute />} > 
        <Route path='/profile' element={<Profile />} /> 
        </Route>
  
      </Routes>
    </BrowserRouter>
  );
}
