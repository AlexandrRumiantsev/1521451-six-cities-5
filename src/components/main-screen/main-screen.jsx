import React from 'react';
import Filter from './components/filter';
import MenuContainer from '../menu/menu-container.jsx';
import MapContainer from '../map/map-container.jsx';
import OfferContainer from '../../components/offer/offer-container.jsx';
import {connect} from "react-redux";

const MainScreen = ({city, param, currentCity, offers}) => {
  const filter = (param) ? param : currentCity;
  const countOffers = offers.filter(offer => offer.city == filter).length;
  const curCity = (param) ? param : currentCity;
  return (
    <div>
      <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-linkheader__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <MenuContainer param={param} city={city}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found"> {countOffers} places to stay in  {curCity}</b>
              <Filter />
              <div className="cities__places-list places__list tabs__content">
                <OfferContainer currentCity={curCity} param={param}/>
              </div>
            </section>
            <div className="cities__right-section">
              <MapContainer param={param} currentCity={curCity}/>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  currentCity : state.currentCity,
  offers: state.offers
});


export {MainScreen};
export default connect(mapStateToProps)(MainScreen);