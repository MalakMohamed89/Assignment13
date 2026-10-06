import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {
  BrowserRouter,
  createHashRouter,
RouterProvider
} from "react-router";
import './App.css'
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import CardDetails from './Pages/cardDetails/CardDetails';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './Pages/TermsOfService/TermsOfService';
import { cardsData } from './data/blogData';
const routers=createHashRouter([{

  path : "/" ,  element : <Layout />,
  children :[

    {index :true , element : <Home />},
    {path : "blog" , element : <Blog />},
    {path:"about", element : <About />},
      { path: "blog/:slug", element: <CardDetails /> },
      {path:"privacyPolicy", element:<PrivacyPolicy />},
      {path:"TermsOfService", element:<TermsOfService />},
      {path : "*" , element : <NotFound />},
]

}])


function App() {


  return (
    <>
<RouterProvider router={routers} ></RouterProvider>
    </>
  )
}

export default App
