import {useEffect, useState} from "react"
import SliderContent from "./SliderContent";
import Arrows from "./Arrows";
import "../styles/SliderShow.css";



function SliderShow({pictures}) {
    console.log(pictures.length)
    const [activeIndex, setActiveIndex] = useState(0);
    const len = pictures.length - 1;
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} sliderImage={pictures} />
            {pictures.length > 1 &&
                <Arrows
                    prevSlide={() =>
                        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                    }
                    nextSlide={() =>
                        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                    }
                />
            }
        </div>
    );
}

export default SliderShow;
