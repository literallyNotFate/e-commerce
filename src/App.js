// Importing routes
import {BrowserRouter as Router, useRoutes} from 'react-router-dom';

// Pages
import About from './pages/About';
import Contacts from './pages/Contacts';
import Feedback from './pages/Feedback';

// Components
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';

// Styles for div
const mainContentStyle = {
  width:'81%',
  marginLeft:'17.5%',
  marginBottom:'15em',
};

// Setting routes
const AppRoutes = () => {
  let routes = useRoutes([
    {path: "/", element: <Products/>},
    {path:"/about", element: <About/>},
    {path: "/contacts", element: <Contacts/>},
    {path: "/feedback", element: <Feedback/>},
  ]);
  return routes;
}

// Main
export default function App() {
  return (
      <>
        <Router>
          <Header/>
          <div style={mainContentStyle}>
            <AppRoutes/>
          </div>
          <Footer/>
        </Router>
      </>
  );
}