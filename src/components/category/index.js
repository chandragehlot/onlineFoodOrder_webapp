import React from 'react';
import {useDispatch} from 'react-redux';
import { setCategroyRedirectToMenu } from '../../action/category.action';
import { getImageUrl } from '../../config';

const MenuCategory = (props) => {
    const dispatch = useDispatch();

    const getAndShowMenu = (category) => {
        dispatch(setCategroyRedirectToMenu(props, category))
    }
    const menuitems = props.categories;
    return (
        <div className="category__section">
            <div className="category__cont">
                <div className="category__items vh-center">
                    { menuitems.length > 0 && menuitems.map((item,index) => (
                        <div 
                            key={`${index}-${item.category}`}
                            className="category__item"
                            onClick={()=>getAndShowMenu(item.category)}>
                                
                                <img className="category__image" src={getImageUrl(item.image_url_key)} alt="categoryitem"/>
                                <div className="category__name">{ item.category }</div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default MenuCategory;