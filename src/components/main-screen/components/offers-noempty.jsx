import React from 'react';
import SelectedClassOption from './selected-class-option.jsx';
import MapContainer from '../../map/map-container.jsx';
import OfferContainer from '../../../components/offer/offer-container.jsx';
import PropTypes from 'prop-types';
import {offerItem} from '../../../shapes/offer-item';
import withOpenSelect from '../../../hocs/with-open-select';
const SelectedClassOptionWithClickOutside = withOpenSelect(SelectedClassOption);


const OffersNoempty = ({currentCity, offers, filterOffer, baseFilter}) => {
  //console.log(baseFilter);
  return (<div className="cities">
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found"> {offers.length} places to stay in  {currentCity}</b>
          <SelectedClassOptionWithClickOutside
            offers={offers}
            filterOffer={filterOffer}
            baseFilter={baseFilter}
          />
        <div className="cities__places-list places__list tabs__content">
            <OfferContainer offers={offers} currentCity={currentCity}/>
        </div>
      </section>
      <div className="cities__right-section">
        <MapContainer currentCity={currentCity} />
      </div>
    </div>
  </div>);
};

OffersNoempty.propTypes = {
  cityId: PropTypes.string,
  currentCityFilter: PropTypes.string,
  baseFilter: PropTypes.string,
  filterOffer: PropTypes.func,
  countOffers: PropTypes.number,
  currentOffers: PropTypes.arrayOf(offerItem)
};

export default OffersNoempty;

/*



<OfferContainer currentCity={currentCityFilter} cityId={cityId} />
 <MapContainer currentCity={currentCityFilter} />
*/
