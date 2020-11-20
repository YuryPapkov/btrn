import React from 'react';
import { IMAGES as images } from '../constants/images.js';
import Card from './Card.js';

import x from '../images/011.jpg';

function ImageGrid() {
  console.log(images);
  return (<div className="imageGrid">
    {images.map((item, idx) => {
      console.log(item.fileName);
      return (
        <Card filePath={x}
          key={item.fileName} />)
    })}
  </div>
  )
}

export default ImageGrid;