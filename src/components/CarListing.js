import React from "react";
import PropTypes from "prop-types";

function CarListing(props) {
    return (<div className="col-md-4 grid_listing">
            <div className="product-listing-m gray-bg">
              <div className="product-listing-img"> <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
              <img src={props.car.imgUrl} className="img-responsive" alt="image" /> </a>
                <div className="label_icon">New</div>
                <div className="compare_item">
                  <div className="checkbox">
                    <input type="checkbox" value="" id="compare10" />
                    <label htmlFor="compare10">Compare</label>
                  </div>
                </div>
              </div>
              <div className="product-listing-content">
                <h5><a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">{props.car.model}</a></h5>
                <p className="list-price">${props.car.price}</p>
                <div className="car-location"><span><i className="fa fa-map-marker" aria-hidden="true"></i> {props.car.location}</span></div>
                <ul className="features_list">
                  <li><i className="fa fa-road" aria-hidden="true"></i>{props.car.km} km</li>
                  <li><i className="fa fa-tachometer" aria-hidden="true"></i>{props.car.miles} miles</li>
                  <li><i className="fa fa-calendar" aria-hidden="true"></i>{props.car.year} model</li>
                  <li><i className="fa fa-car" aria-hidden="true"></i>{props.car.engine}</li>
                </ul>
              </div>
            </div>
          </div>);
}

// CarListing.propTypes = {
//   car: PropTypes.object.isRequired
// }
export default CarListing;

