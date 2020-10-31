import React from 'react';
import {
  Link
} from "react-router-dom";

const Menu = ({cities, currentCity, changeCity}) => {

  return (

            <ul className="locations__list tabs__list">
              {cities.map((city) => (
                <li key={city.id} className="locations__item">
                  <Link onClick={
                    () => changeCity(city.title)
                  }
                  className={`locations__item-link tabs__item${(city.title == currentCity) ? `--active`: `` }`}
                  to={city.link}
                  >
                    <span>{city.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

  );
};


export default Menu;