import { useState } from "react"

import { useWindowDimensions } from "../hooks/useWindowDimensions"
import { ProductCard } from "./ProductCard"

import arrowImg from '../../public/images/arrow@3x.png'


export const ProductSlider = ({ productsSlides = [] }) => {


    const [current, setCurrent] = useState(0)
    const length = productsSlides.length

    const { width } = useWindowDimensions()

    const goToNext = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const goToPrev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    // * Mobile Slider
    if (width <= 790) {
        return (
            <div className="productSlider">

                <button onClick={goToPrev} className="sliderBtn">
                    <img src={arrowImg} alt="arrow left" />
                </button>

                <div className="productCardContainer">

                    {productsSlides.map((product, i) => (
                        (i === current &&
                            <ProductCard {...product} key={product.title} />
                        )
                    ))
                    }

                </div>

                <button onClick={goToNext} className="sliderBtn right">
                    <img src={arrowImg} alt="arrow right" />
                </button>
            </div>
        )
    } else {
    // * Default desktop slider
        return (
            <div className="productSlider">

                <button onClick={goToPrev} className="sliderBtn">
                    <img src={arrowImg} alt="arrow left" />
                </button>

                <div className="productCardContainer">

                    {productsSlides.map((product, i) => (
                        <ProductCard {...product} key={product.title} />
                    ))
                    }

                </div>

                <button onClick={goToNext} className="sliderBtn right">
                    <img src={arrowImg} alt="arrow right" />
                </button>
            </div>
        )
    }
}
