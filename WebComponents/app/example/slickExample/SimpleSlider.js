import React, { Component } from 'react';
import Slider from 'react-slick';

class SimpleSlider extends Component {
 render() {
   const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
   };
   return (
     <div style={styles.container}>
       <Slider {...settings}>
         <div style={styles.div}><h3>1</h3></div>
         <div style={styles.div}><h3>2</h3></div>
         <div style={styles.div}><h3>3</h3></div>
         <div style={styles.div}><h3>4</h3></div>
         <div style={styles.div}><h3>5</h3></div>
         <div style={styles.div}><h3>6</h3></div>
       </Slider>
     </div>
   );
 }
}

const styles = {
    container: {

    },
    div: {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'blue',
        textAlign: 'center'
    }
}

export default SimpleSlider;
