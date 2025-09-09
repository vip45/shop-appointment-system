import React from 'react'
import styles from './Steps.module.css'
const Steps = () => {
  return (
    <div className={styles.easy_steps + " d-flex justify-content-center align-items-center gap-3"}>
        <div className={styles.easy_steps_card}>
            <p>1. Browse Shops/Service</p>
            <p>Explore a variety of shops and services near you.</p>
        </div>
        <div className={styles.easy_steps_card}>
            <p>2. Select Service & Time</p>
            <p>Pick your desired service and choose a convenient time for your appointment.</p>
        </div>
        <div className={styles.easy_steps_card}>
            <p>3. Book Appointment</p>
            <p>Confirm your booking instantly. Receive confirmation and details via email or SMS.</p>
        </div>
        <div className={styles.easy_steps_card}>
            <p>4. Visit the Shop</p>
            <p>Show up at the scheduled time and enjoy the service you booked. Easy and hassle-free!</p>
        </div>
    </div>
  )
}

export default Steps