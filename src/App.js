import './App.css';
import Appbar from './components/global/Appbar';
import ImageSlider from './components/slider/ImageSlider';
import InfoSlider from './components/slider/InfoSlider';

function App() {
  return (
    <div className="App">
      <Appbar / >
      <ImageSlider />
      <InfoSlider />
    </div>
  );
}

export default App;
