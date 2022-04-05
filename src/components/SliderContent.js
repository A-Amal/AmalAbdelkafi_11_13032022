function SliderContent({ activeIndex, sliderImage }) {
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={slide} alt="" />
                    <div  className="slideIndex" >{index+1}/{sliderImage.length}</div>
                </div>
            ))}
        </section>
    );
}

export default SliderContent;
