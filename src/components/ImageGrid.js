import React from 'react';
import { IMAGES as images } from '../constants/images.js';
import Card from './Card.js';
//import x from '../images/020.jpg';

function ImageGrid({ onClick }) {

  return (
    <div className="imageGrid">
      {images.map((item, idx) => {
        const image = require(`../images/${item.fileName}`);
        //console.log(image);
        return (
          item.title &&
          <Card
            fileName={image.default}
            key={image.default}
            onClick={onClick} />
        )
      })}
    </div>
  )

}

export default ImageGrid;
