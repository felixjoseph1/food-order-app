import { CDN_LOGO } from '../utils/constants';

const RestaurantCard = (props) => {
    const {resData}=props;
    const {
      name,
      cuisines,
      cloudinaryImageId,
      avgRating,
      totalRatingsString,
      costForTwo,
      sla,
      locality,
      areaName
    }=resData?.info;

    return(
        <div className='res-card'>
            <div className='res-card-img'>
                <img src={CDN_LOGO+ cloudinaryImageId} alt='food' />
            </div>
            <div className='res-card-content'>
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{totalRatingsString} Total ratings</h4>
                <h4>{costForTwo}</h4>
                <h4 id="locality">{locality},{areaName}</h4>
                <h4>{sla.deliveryTime} minutes</h4>
                {/* <button>Add to Cart</button> */}
            </div>
        </div>
    )
}

export default RestaurantCard;