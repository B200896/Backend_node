import { useState, useEffect } from 'react'
import axios from 'axios'
import Register from './Register/Register';
import Login from './Login/Login';
import Homepage from './Homepage/Homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
//   const [jokes, setJokes] = useState([]);

//   useEffect(() => {
//     axios.get('/jokes')
//       .then((response) => {
//         console.log(response);
//         setJokes(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
  // }, []); // Add the dependency array to ensure this runs only once when the component mounts

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/register' element={ <Register/>}></Route>
        <Route path='/login' element={ <Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
