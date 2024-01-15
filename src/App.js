
import background from './img/background.jpg'
import TopicsPage from './components/TopicsPage';
import Navbar from './Navbar/Navbar';

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
      <Navbar/>
      <TopicsPage />
    </div>
  );
}

export default App;
