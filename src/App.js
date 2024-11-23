import './App.css';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  
  let routers = createHashRouter([
    {path:'/', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      {path:'about', element: <About/>},
      {path:'skills', element: <Skills/>},
      {path:'works', element: <Portfolio/>},
      {path:'contact', element: <Contact/>}
    ]}
  ])
  return (<>
    <RouterProvider router={routers}/>
  </>);
}

export default App;
