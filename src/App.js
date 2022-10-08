import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './compo/About/About';
import CartedProducts from './compo/CartedProducts/CartedProducts';
import Home from './compo/Home/Home';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    { path: '/' , element: <Main></Main>, children: [
      {path: '/',
      loader: async()=> fetch('t-shirt.json') ,
      element: <Home></Home>},
      {path: '/orders', element: <CartedProducts></CartedProducts> },
      {path: '/about', element: <About></About> },
      // {path: '/home', element: <Home></Home>}
    ] },
  ])
  return (
    <div className="container mx-auto text-center">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
