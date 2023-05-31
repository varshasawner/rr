import logo from './logo.svg';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import JobDescrption from './components/JobDescription/JobDescrption';
import './style.css'
import './components/Portfolio/style3.css'
import './components/Careers/new2.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Contact from './components/ContactPage/Contact';
import ContactHome from './components/ContactHome/ContactHome';
import Portfolio from './components/Portfolio/Portfolio';
import Careers from './components/Careers/Careers';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Careers />
        <Routes>
          <Route path='/jobdescription' element={<JobDescrption />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <JobDescrption /> */}
      {/* <Contact /> */}
      {/* <ContactHome/> */}
      {/* <Portfolio /> */}
     

    </div>
  );
}

export default App;
