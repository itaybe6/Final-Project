import one from './img/1.jpg'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BasicConcept from './pagesComponents/BasicConcept';
import Psychology from './pagesComponents/Psychology';
import TechnologicalTools from './pagesComponents/TechnologicalTools';
import LongTerm from './pagesComponents/LongTerm';
import StockData from './pagesComponents/StockData';
import MessageList from './components/MessageList ';
import TipsWithFlipEffect from './components/TipsWithAnimatedIcons';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import HomePage from './components/HomePage';

import { UserProvider } from './components/UserContext'; // to pass all the details of the user
import DayTrade from './pagesComponents/DayTrade';

function App() {
  const backgroundStyle = {
    display: 'flex',         // Makes the container a flexbox container
    flexDirection: 'column', // Align children (content and footer) in a column
    minHeight: '100vh',      // Minimum height to fill the viewport height
    backgroundImage: `url(${one})`, // Sets the background image using the imported file
    backgroundSize: 'cover', // Ensures the background covers the entire container
    backgroundRepeat: 'no-repeat', // Prevents the background from repeating
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
              <Route path="/TechnologicalTools" element={<TechnologicalTools />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/LongTerm" element={<LongTerm />} />
              <Route path="/DayTrade" element={<DayTrade />} />
              <Route path="/StockData" element={<StockData />} />


              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>

          <Footer />
          <MessageList />
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
