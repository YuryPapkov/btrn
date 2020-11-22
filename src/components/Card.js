import React from 'react';


function Card({ fileName, onClick }) {

  console.log(fileName)

  const onCardClick = () => {
    console.log(fileName);
    onClick(fileName);
  }
  return (
    <img
      src={fileName}
      onClick={onCardClick}
      className="card" alt="" />
  )

}

export default Card;