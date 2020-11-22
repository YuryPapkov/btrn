//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageGrid from './ImageGrid.js';
import Footer from './Footer.js';
import Popup from './Popup.js';

function App() {
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const [popupFilename, setPopupfilename] = React.useState('');
  let browserWidth = window.innerWidth;
  window.addEventListener('resize', () => { browserWidth = window.innerWidth });

  const handleCardClick = (fileName) => {
    console.log(fileName);
    setIsPopupOpened(true);
    setPopupfilename(fileName);
  }
  const handleClosePopup = () => {
    console.log('llll');
    setIsPopupOpened(false);
  }
  return (
    <div className="App">
      <Header width={browserWidth} />
      <ImageGrid onClick={handleCardClick} />
      <Footer />
      {isPopupOpened && < Popup
        fileName={popupFilename}
        onClose={handleClosePopup}
      />}


    </div>
  );
}
export default App;
