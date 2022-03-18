import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderComponent';
import Navigation from './components/Navigation';
// import Cards from './components/HomePage';
// import ApplicationView from './components/ApplicationViewComponent';

import Main from './components/MainComponent';
function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <Main/>
    </div>
  );
}

export default App;
