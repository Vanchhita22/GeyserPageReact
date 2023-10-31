
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import MainConent from './Components/MainConent';
import Content from './Components/Content';
import Mainpage from './Components/mainpage';


function App() {
  

  return (
    <div className="App">

    <Header />
      <MainConent />
      <Content />
    
  
      <Mainpage/>
  
    </div>
  );
}

export default App;
