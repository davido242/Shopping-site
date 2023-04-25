//create an object here and import it anywhere you want to use it
import AirPod from './src/assets/Airpod.jpeg';
import Iron from './src/assets/iron.jpeg';
import Phone from './src/assets/phone.jpeg';
import Powerbank from './src/assets/powerbank.jpeg';
import Wristwatch from './src/assets/wristwatch.jpeg';



const products = [
    {
        image: AirPod,
        name: "Oraimo FreePods-3",
        price: 5400,
        oldPrice: 232,
        brand: "Binatone",
        rating: 5,
        id: 1,
        cartQty: 0,
    },
    {
        image: Iron,
        name: "Binatone Dry Iron - Di1255",
        price: 3200,
        oldPrice: 232,
        brand: "orimo",
        rating: 5,
        id: 2,
        cartQty: 0,

    },
    {
        image: Phone,
        name: "Samsung Galaxy A13",
        price: 2000,
        oldPrice: 232,
        brand: "orimo",
        rating: 5,
        id: 3,
        cartQty: 0,

    },
    {
        image: Powerbank,
        name: "Oraimo OPB-P118D",
        price: 6100,
        oldPrice: 232,
        brand: "orimo",
        rating: 5,
        id: 4,
        cartQty: 0,

    },
    {
        image: Wristwatch,
        name: "Skmei Men Quartz",
        price: 343,
        oldPrice: 232,
        brand: "orimo",
        rating: 5,
        id: 5,
        cartQty: 0,

    },
];

export default products;

