import background from './img/background.jpg'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BasicConcept from './pagesComponents/BasicConcept';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Buttons from './MatirealUi/Buttons';

function App() {
  const backgroundStyle = {
    // backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '110vh', // Ensures that the div is at least as tall as the viewport
    minWidth: '100%',   // Ensures it spans the full width
  };

  return (
    <Router>
      <div style={backgroundStyle}>
        <Navbar />




          <Routes>

            <Route path="/BasicConcept" element={<BasicConcept />} />


          </Routes>


        <Footer />
      </div>


    </Router>
  );
}

export default App;
