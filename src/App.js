import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from './components/Main';

function App() {
  return (
    <div className="page-wrap">
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
