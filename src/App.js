import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './compo/Home/Home';
import Order from './compo/Order/Order';
import About from './compo/About/About';

function App() {
  const router = createBrowserRouter([
    { path: '/' , element: <Main></Main>, children: [
      {path: '/', element: <Home></Home>},
      {path: '/home', element: <Home></Home>},
      {path: '/orders', element: <Order></Order> },
      {path: '/about', element: <About></About> },
    ] }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
