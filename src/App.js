import logo from './';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   <div>
        <Login/>
        <Home/>
   </div>
  );
}

export default App;
