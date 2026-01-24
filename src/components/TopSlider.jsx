import { useState, useRef } from "react";
import { useEffect } from "react";

const TopSlider = ({ items }) => {
    const refSlider = useRef(null);
    const [currentSlider, setCurrentSlider] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlider((prev) => 
            prev >= items.length - 1 ? 0 
            : prev + 1 
        ) 
        }, 4500)
        return () => clearInterval(interval);
    }, [items.length])

    useEffect(() => {
        const slides = refSlider.current?.querySelectorAll('[slider-data]')
        if (slides?.[currentSlider]){
            slides[currentSlider].scrollIntoView({ behavior: 'smooth',
                block: 'nearest',
                inline: 'start',
            })
        }

    }, [currentSlider])

    const handlePrev = () => {
        setCurrentSlider((prev) => (prev <= 0 ? items.length - 1 : prev - 1))
      }

    const handleNext = () => {
        setCurrentSlider((prev) => (prev >= items.length - 1 ? 0 : prev + 1))
    }

    let btnStyles = 'hidden h-10 w-10 flex-shrink-0 items-center justify-center border border-line text-lg text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-blink sm:flex' 

    return (
        <section className="bg-sliderBg border border-yelloish px-3 py-3 sm:px-4">
            <div className="flex items-center gap-2">
                <button className={btnStyles} onClick={handlePrev}>‹ </button>

                <div ref={refSlider} className="flex flex-1 gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
                    {items.map((item) => (
                        <article key={item.title} slider-data
                        className="flex flex-1 gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
                            <div className="h-14 w-14 flex-shrink-0 overflow-hidden bg-neutral-200">
                                <img src={item.imgUrl} alt="" className="h-full w-full object-cover" loading="lazy" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-xs font-medium leading-snug text-blink">
                                {item.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
                <button className={btnStyles} onClick={handleNext}>›</button>
            </div>
        </section>
    )
}

export default TopSlider;