import { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import NavRouters from './Components/NavRouters'
import LoadingScreen from './Components/LoadingScreen';
import DataContext from './Context/Context';
import { Footer } from './Components/Footer';


function App() {
  const {isLoading} = useContext(DataContext)
  return (
    <div className="App">
      {
        isLoading ? 
        <LoadingScreen />
        :
        <>
          <Navbar />
          <NavRouters />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
