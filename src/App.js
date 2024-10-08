
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  return (
      <div className="App">
          <Header />
          <Profile />
          <About />
          <Gallery />
          <Footer />
      </div>
  );
}

export default App;
