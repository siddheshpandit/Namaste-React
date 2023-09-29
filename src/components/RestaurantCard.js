import { IMAGES_CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { info } = resData;
    return (
      <div className="res-card">
        <img
          className="res-img"
          src={
            IMAGES_CDN_URL +
            info.cloudinaryImageId
          }
          alt=""
        />
        <div className="res-details">
          <h3>{info.name}</h3>
          <h4>{info.avgRating}</h4>
          <h4 style={{ color: "grey" }}>
            {info.cuisines.slice(0, 3).join(", ")}
          </h4>
          <div
            style={{
              // margin: "4px 0px",
              // padding: "4px 0px",
              color: "grey",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h4>{info.locality}</h4>
            <h4>30 mins</h4>
          </div>
        </div>
      </div>
    );
};

export default RestaurantCard;