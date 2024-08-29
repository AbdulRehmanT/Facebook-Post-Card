import './App.css';
import MediaCard from './Components/PostCard/MediaCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MediaCard imageSrc="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" imageAlt="Wallpaper" name="Abdul Rehman" date="29 August 2024" details="Find free HD wallpapers for your desktop, Mac, Windows or Android device. We have a lot of different topics like nature, abstract "/><br/>
        <MediaCard imageSrc="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" imageAlt="Wallpaper" name="Abdul Rehman" date="29 August 2024" details="Find free HD wallpapers for your desktop, Mac, Windows or Android device. We have a lot of different topics like nature, abstract "/><br/>
        <MediaCard imageSrc="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" imageAlt="Wallpaper" name="Abdul Rehman" date="29 August 2024" details="Find free HD wallpapers for your desktop, Mac, Windows or Android device. We have a lot of different topics like nature, abstract "/><br/>
      </header>
    </div>
  );
}

export default App;
