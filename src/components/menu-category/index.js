import React from 'react';

const MenuCategory = (props) => {
    const menuitems = props.categories;
    return (
        <div className="category__section">
            <div className="category__cont">
                <div className="category__items">
                    { menuitems.length > 0 && menuitems.map(item => (
                        <div className="category__item"> { item } </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default MenuCategory;