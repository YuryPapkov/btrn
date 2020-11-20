import React from 'react';


function Card({ filePath }) {
  console.log(filePath)
  return (
    <img src={filePath} className="card" alt="" />
  )

}

export default Card;