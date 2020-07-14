import React from 'react';
import './App.css';
import { NavbarComp } from "./component/navbarGrid";
import { HeaderComp } from "./component/HeaderGrid";

function App() {
  return (
    <>
      <div className='container-fluid '>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <NavbarComp />
            <HeaderComp />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
