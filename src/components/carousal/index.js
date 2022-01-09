import React, { useState } from "react";

const Carausal = (props) => {
  const {
    carusalConfig2: { config },
  } = props || {};

  const [activeObj, setActiveObj] = useState({
    firstActive: 1,
    lastActive: 5,
  });

  const getCarausalClass = (id) => {
    const { firstActive, lastActive } = activeObj;
    return id >= firstActive && id <= lastActive
      ? `carausal_items active`
      : `carausal_items inactive`;
  };

  const moveRight = () => {
    const { firstActive, lastActive } = activeObj;
    setActiveObj({
      firstActive: firstActive + 1,
      lastActive: lastActive + 1,
    });
  };

  const moveLeft = () => {
    const { firstActive, lastActive } = activeObj;
    setActiveObj({
      firstActive: firstActive - 1,
      lastActive: lastActive - 1,
    });
  };

  return (
    <div className="carausal__cont">
      {console.log(activeObj)}
      <div className="carausal__subcont">
        <div className="carausal__btn-cont">
          {activeObj.firstActive > 1 && (
            <div className="carausal_btn" onClick={moveLeft}>
              {"<"}
            </div>
          )}
        </div>
        <div className="carausal__item_cont">
          {config.length > 0 &&
            config.map((item) => (
              <div className={getCarausalClass(item.id)} key={item.id}>
                <img src={item.image} alt="carausal-img" />
                {item.id}
              </div>
            ))}
        </div>
        <div className="carausal__btn-cont">
            { activeObj.lastActive < config.length && 
          <div className="carausal_btn" onClick={moveRight}>
            {">"}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Carausal;
