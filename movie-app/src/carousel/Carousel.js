import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css" 
import "./slick-theme.css";
import data from '../Mock.json';
import MovieCard from "./MovieCard";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <div>
        <Slider {...settings}>
          {data.map((item)=>{
            return(
                <div>
                <MovieCard movie={item}/>
                </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}