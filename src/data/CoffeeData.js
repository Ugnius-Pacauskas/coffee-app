import latteImage from "../img/latte.jpg"
import cappuccinoImage from "../img/cappuccino.jpg"
import expressoImage from "../img/expresso.jpg"
import mintMochaImage from "../img/mint-mocha.jpg"
import mocha from "../img/mocha.jpg"

const coffeeData = [
    {
        id: 0,
        name: "Latte",
        price: 2.00,
        alt: "Latte",
        imageUrl: latteImage,
    },
    {
        id: 1,
        name: "Expresso",
        price: 2.00,
        alt: "Expresso",
        imageUrl: cappuccinoImage,
    },
    {
        id: 2,
        name: "Cappucino",
        price: 3,
        alt: "Cappucino",
        imageUrl: expressoImage,
    },
    {
        id: 3,
        name: "Mocha",
        price: 2.40,
        alt: "Mocha",
        imageUrl: mocha,
    },
    {
        id: 4,
        name: "Mint mocha",
        price: 3.00,
        alt: "Mint mocha",
        imageUrl: mintMochaImage,
    },
]

export default coffeeData