//import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ImageGrid from './ImageGrid.js';
import Footer from './Footer.js';

function App() {
  let browserWidth = window.innerWidth;
  window.addEventListener('resize', () => { browserWidth = window.innerWidth });
  return (
    <div className="App">
      <Header width={browserWidth} />
      <ImageGrid />
      <Footer />


    </div>
  );
}
export default App;
