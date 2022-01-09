import React, { useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import  Loader from './components/Loader/loader';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
    {isLoading ? (
      <Loader />
    ) : (
      <>
        <Routes>
          <Route exact path="/signin" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
        </Routes>
      </>
    )}
    </div>
  )
}
 const WithRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  );
};
export default WithRouter