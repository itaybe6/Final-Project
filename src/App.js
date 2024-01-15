
import background from './img/background.jpg'
import RowTopics from './components/RowTopics';
import Navbar from './Navbar/Navbar';
import BasicConcept from './pagesComponents/BasicConcept';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '110vh',  // Ensures that the div is at least as tall as the viewport
    minWidth: '100%',   // E
  };

  return (
    <div className="App" style={backgroundStyle}>

      {/* <Navbar/> */}
      <BasicConcept />
      
    </div>
  );
}

export default App;
