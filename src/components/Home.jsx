import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import Products from './Products';

const Home = () => {
  return (
    <>
    
    <div className='row'>
      <div className='col-4'>

<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
      </div>
      <div className='col-8'>
        <h1>XENTICE</h1>
      </div>
      
    </div>
    <div className='commercials'>

    </div>
    <div className='background'>
      {/* <img src="./assets/bacgound.jpg" alt="" /> */}

    </div>
    <div className='place'>
      <h1>Choose from 25,00+ Spaces for your Business </h1>
      <h5>Get inspired and find your perfect place</h5>

      <div className="dropdown">
  <button className="lookbtn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Looking for
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div className="dropdown">
  <button className="lookbtn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Delhi
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

<button className="btnSearch" type="submit">Search</button>


    </div>
    <div className='services'>

    </div>


    <div className='row  '>

    <div className='crsel-left col-8 '>
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/courosel1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/courosel2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>


    </div>
    <div className='crsel-right col-4'>
 <img src="./assets/couroselright.png" alt="" />

    </div>

    </div>

    <div className='container'>
      <Products />

    </div>
    </>
    
  )
}

export default Home
