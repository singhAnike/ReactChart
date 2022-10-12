//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Areachart from './Components/Areachart';
import PieChart from './Components/PieChart';
// import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';


function App() {
  
  return (
   
   <div>
    <Navbar/>
    <PieChart/>
    <Areachart/>
    <Footer/>
   </div>
  
  );
}

export default App;
