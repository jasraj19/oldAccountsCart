import Layout from './Components/Layout';
import Instaslider from './Components/Instaslider'
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Blogs from './Pages/Blogs'
import './App.css';
import SinglePost from './Pages/SinglePost';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ForgetPassword from './Pages/ForgetPassword';
import ResetPassword from './Pages/ResetPassword';
import Pricing from './Pages/Pricing';
import Faq from './Pages/Faq';
import Users from './Pages/Users';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}/>
      <Route path="/blogs" element={<Blogs />}/>
      <Route path="/singlePost/:slug" element={<SinglePost />}/>
      <Route path="/login" element={<Login />}/>
      <Route path='/signUp' element={<SignUp />}/>
      <Route path='/forgetPassword' element={<ForgetPassword />}/>
      <Route path='/resetPassword' element={<ResetPassword />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/faq" element={<Faq />}/>
      <Route path="/users" element={<Users />}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
