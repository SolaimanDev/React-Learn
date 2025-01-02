
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
 import Child from './components/STATE_LIFTING/Child';

function App() {
  const handleChildData = (data) => {
    console.log(data);
  }
  return (
    <>
     <div className="App">
      <Child onChildData={handleChildData} />  
      
      </div>
      
    </>
  )
}

export default App
