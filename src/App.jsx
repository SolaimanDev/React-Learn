
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchApi from './components/ASSIGNMENT_5/CustomeHook/FetchApi';
import Users from './components/ASSIGNMENT_5/Users';


function App() {
  const url='https://jsonplaceholder.typicode.com/users';
  const {isLoading,error,data}=FetchApi(url);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <>
     <div className="card">
     <h2>User Management</h2>
     <Users users={data} />
      </div>
    </>
  )
}

export default App
