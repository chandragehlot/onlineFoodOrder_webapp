import React from 'react';

const MenuCategory = () => {
    const menuitems = ['pizza', 'north', 'south', 'panjabi', 'breakfast', 'bevarage']; 
    return (
        <div className="category__section">
            <div className="category__cont">
                <div className="category__items">
                    { menuitems.map(item => (
                        <div className="category__item"> { item } </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default MenuCategory;