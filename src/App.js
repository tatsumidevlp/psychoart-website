import About from './components/About';
import Banner from './components/Banner';
import Collection from './components/Collection';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Questions from './components/Questions';
import Slider from './components/Slider';
import Tape from './components/Tape';
import TopCreator from './components/TopCreator';
import './styles/index.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Tape />
      <About />
      <Collection />
      <Featured />
      <TopCreator />
      <Questions />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
