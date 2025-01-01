
import './App.css'
import CardList from './components/cardlist'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data.json';
function App() {
  console.log(Data);
 
  // <CardList titleText={Data[i].title} titleDescription={Data[i].description}/>

  return (
    <>
     
      <h1>Vite + React</h1>
      {Data.map((item,index)=> <CardList titleText={item.title} titleDescription={item.description} key={index}/>)}
    </>
  )
}

export default App
