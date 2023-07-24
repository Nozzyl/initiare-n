import './App.css';
import headerVideo from "./assets/pexels-pixabay-855204-1920x1080-30fps.mp4";

function App() {
  return (
    <div className="App">
      <div className="header">
        <video className='header-video' src={headerVideo} muted autoPlay loop></video>
        <h1 className="main-text">InitiaRe</h1>
        <div className="clock-wrap">
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="long-hand"></div>
          <div className="short-hand"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

