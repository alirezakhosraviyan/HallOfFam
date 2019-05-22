/*
* predefined slides for introduction
* */
import styles from '../styles/main';

const slides = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: {
      uri:
      'https://aboutreact.com/wp-content/uploads/2018/08/mobile_recharge.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    titleStyle: styles.title,
    text: 'Upto 25% off on Domestic Flights',
    image: {
      uri:
      'https://aboutreact.com/wp-content/uploads/2018/08/flight_ticket_booking.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Great Offers',
    titleStyle: styles.title,
    text: 'Enjoy Great offers on our all services',
    image: {
      uri: 'https://aboutreact.com/wp-content/uploads/2018/08/discount1.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
];

export default slides;