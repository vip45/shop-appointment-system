import React from "react";
import data from "../../data/shop.json";
import styles from "./service.module.css";
import { Link, useNavigate } from 'react-router-dom';
const Service = () => {
  // console.log(data);
  const allServices = data.flatMap((shop) =>
    shop.services.map((service) => ({
      ...service,
      shopName: shop.shopName,
      shopId: shop.shopId,
      category:shop.category,
      address:shop.address,
      description:shop.description,

    }))
  );

  const navigate = useNavigate();

const handleSpace = (str) => {
    return str.replace(/\s+/g, '-');
};


  return (
    <>



      <div className={styles.service_card_main + " row container mx-auto my-4"}>
        {allServices.map((elem, index) => (
          <div
            key={index}
            className={styles.service_card + " p-2  col-lg-4 col-md-6 col-4 "}
          >
            <div className="border border-2 rounded-3 h-100 shadow-sm  p-3 position-relative">
              <Link to={`/service/${elem.shopId}/${handleSpace(elem.shopName)}`} className={styles.shop_name + " h6 text-muted  text-decoration-none cursor-pointer"}>{elem.shopName}</Link>
              <p className="h5 fw-bold mb-2">{elem.name}</p>
              <p className="small mb-2">{elem.description}</p>
              <p className="fw-bold text-success mb-3">{elem.price}</p>
              <div className={styles.shop_nav + " d-flex justify-content-between align-items-center "}>
                <button onClick={()=>navigate(`/service/${handleSpace(elem.shopName?.trim())}/${handleSpace(elem.name.trim())}`)} className="btn btn-primary ">Book Now</button>
                <p className="m-0 cursor-pointer">Shop Details</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
