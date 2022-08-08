import React from 'react';
import dish from './data';

const Menu = ({menu}) => {
    return (
      <>
      {dish.map((dish)=>{
          const {id, title, categroy, price, img, desc}=dish;
      
      return (
        
        <article key={dish.id} className="dish">
          <img src={dish.img} alt={dish.title} />
          <div>
              <h4>{dish.title}</h4>
              <p>${dish.price}</p>
          </div>
        </article>
      );
      })}
      </>
    );
  };
export default Menu;