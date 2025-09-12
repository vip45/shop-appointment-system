import React from "react";
import data from "../../data/shop.json";
import styles from "./service.module.css";
import { useNavigate } from 'react-router-dom';
const Service = () => {
  // console.log(data);
  const allServices = data.flatMap((shop) =>
    shop.services.map((service) => ({
      ...service,
      shopName: shop.shopName,
      shopId: shop.shopId,
      category:shop.category,

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
              <p className="h6 text-muted mb-2">{elem.shopName}</p>
              <p className="h5 fw-bold mb-2">{elem.name}</p>
              <p className="small mb-2">{elem.description}</p>
              <p className="fw-bold text-success mb-3">{elem.price}</p>
              <button onClick={()=>navigate(`/service/${handleSpace(elem.shopName?.trim())}/${handleSpace(elem.name.trim())}`)} className="btn btn-primary ">Book Now</button>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
