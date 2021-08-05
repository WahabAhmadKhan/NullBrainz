import React from 'react';

import './App.css';
import Navbar from './components/navbar'
import Content from './components/content'
import GroundTruth from './components/groundTruth'
import HowItWorks from './components/howitworks'
import WaterFall from './components/waterfall'
import ExampleDel from './components/example'
import ImgRangeSlider from './components/imgRangeSlider'
import ImageSlide from './components/imageSlider'
// import ImageGallery from 'react-image-gallery'
import Section from './components/section'
import Form from './components/form';
import CaptchaComponent from './components/captcha';
import TrueSketch from './components/truesketch'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Content />
      <GroundTruth />
      <ImgRangeSlider/>
      <HowItWorks />
      <WaterFall />
      <ExampleDel />
      <TrueSketch />
      <Section />
      <Form />
      <CaptchaComponent /> 
      {/* <ImageGallery items={images} />; */}
    </div>
  );
}

export default App;
