import background from './img/background.jpg'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BasicConcept from './pagesComponents/BasicConcept';
import Psychology from './pagesComponents/Psychology';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import HomePage from './components/HomePage';

import { UserProvider } from './components/UserContext'; // to pass all the details of the user

function App() {
  const backgroundStyle = {
    display: 'flex',         // Makes the container a flexbox container
    flexDirection: 'column', // Align children (content and footer) in a column
    minHeight: '100vh',      // Minimum height to fill the viewport height
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const contentStyle = {
    flex: '1', // This allows the content to expand and push the footer to the bottom
  };

  return (
    <Router>
      <div style={backgroundStyle}>
        <UserProvider >
          <Navbar />
          <div style={contentStyle}>
            <Routes>
              <Route path="/BasicConcept" element={<BasicConcept />} />
              <Route path="/Psychology" element={<Psychology />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>

          <Footer />
          
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
