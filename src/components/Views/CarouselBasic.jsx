import React from 'react';
import { Carousel } from 'antd';

const CarouselBasic = React.createClass({
  render() {
    return (
      <div style={{ width: 600, margin: 'auto'}}>
        <Carousel autoplay>
  	      <div><img src='http://7viirv.com1.z0.glb.clouddn.com/ewfsew.jpg' style={{width: 600}} /></div>
  	      <div><img src='http://7viirv.com1.z0.glb.clouddn.com/dsfwes.jpg' style={{width: 600}} /></div>
  	      <div><img src='http://7viirv.com1.z0.glb.clouddn.com/11249174041b6a5edfo.jpg' style={{width: 600}} /></div>
  	    </Carousel>
      </div>
    )
  }
})

export default CarouselBasic;
