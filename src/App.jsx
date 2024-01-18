import './App.css';
import GallaryFooter from './components/FooterSection/GallaryFooter';
import Header from './components/HeaderSection/Header';
import Body from './components/BodySection/Body';
import imageData from './components/Data/dataSection';



function App() {
  return (
    <div>
     <Header/>
      <Body data={imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
