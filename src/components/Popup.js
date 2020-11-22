import React from 'react';


function Popup({ fileName, onClose }) {
  const [isVisible, setIsVisible] = React.useState(0);
  React.useEffect(() => {
    console.log('ddddd');
    setIsVisible(1);
  }, [])

  return (
    <div className="popup" style={{ opacity: isVisible }}>
      <div className="popup__overlay">
      </div>
      <button className="popup__button popup__button_type_magnify">magnify</button>
      <button
        className="popup__button popup__button_type_close"
        onClick={onClose}
      >close</button>
      <img src={fileName} className="popup__image" alt="" />
    </div>
  )

}

export default Popup;