import logo from './logo.svg';
import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Footer from './layout/Footer';
import ViewUser from './users/ViewUser';
import FullSection from './layout/FullSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ViewUser />
      <FullSection padding="10px">
        <Footer />
      </FullSection>

    </div>
  );
}

export default App;
