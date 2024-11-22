import './App.css';
import { createBrowserRouter, createHashRouter, RouterProvider, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

function App() {
  
  let routers = createHashRouter([
    {path:'/', element: <Layout/>}
  ])
  return (<>
    <RouterProvider router={routers}/>
  </>);
}

export default App;
