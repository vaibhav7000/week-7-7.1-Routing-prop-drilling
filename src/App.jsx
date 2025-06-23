import { BrowserRouter, Routes, Route } from "react-router"
import './App.css'
import HeaderMemo from "./Components/Header";
import { lazy } from "react";

// This approach shuvs all the Component rendering logic inside a single JS file, increase the bundle side that server will send ( not optimized way ), rather only select those routes which are important ( select the respective components for that ) for else make them "Lazy" -> when routed to that it will fetch that and updated the bundle

const About = lazy(() => import('./Components/About.jsx'));
const Landing = lazy(() => import("./Components/Landing.jsx"))
const Dashboard = lazy(() => import("./Components/Dashboard.jsx"));

function App() {

  // Syntax to enable routing in the application
  return (
    <>
      <HeaderMemo />
        <Routes>
          <Route path="" element={<Landing/>}/>
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="about" element={<About/>} />
        </Routes>
    </>

  )
}

export default App


// "React" allows us to make "single page web-applications" (SPA) -> there is no way to naviagte to other pages when application is building using "React", Using React-router we can build" multi-page web-application"

// "React-router" enables "client-side-routing" -> this refers to handling navigation within the browser using the js ( does not cause full page reload ) no request will be send to the server, only using JS we will update the component

/*
On URL change / navigation happens , React Router:

1. Intercepts the request.
2. Matches the URL to a route.
3. Browser URL changes to new Route
4. React dynamically shows the <About /> component
5. No network request for a new HTML page

Dynamically renders the appropriate React component within the root element present inside the index.html and hence does not cause the page to reload

// "React-router" uses Client-side-routing to naviagte between different pages. In Client-side-routing we uses "JS" to navigate to different page + updation of Component inside the index.html file. Every time when the user navigates single index.html file gets updates

*/


// When doing Client-side-routing we request the resources only once like index.html + css + js. JS / React-router ( ki js) contains all the logic of doing of routing / navigating to different screen ( updates the browser URL + updates the Component that will render inside the root element) => single html that gets updated everytime