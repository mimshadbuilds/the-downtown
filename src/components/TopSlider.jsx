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

    useEffect(() => {               //incomplete
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

    let btnStyles = 'flex h-9 w-9 flex-shrink-0 items-center justify-center border border-yelloish text-lg text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-blink sm:h-10 sm:w-10' 

    return (
        <section className="rounded border border-yelloish bg-white px-3 py-3 shadow-sm sm:rounded-none sm:border-0 sm:border-b sm:px-4 sm:shadow-none">
            <div className="flex items-center gap-2">
                <button className={btnStyles} onClick={handlePrev}>‹</button>
                <div
                    ref={refSlider}
                    className="flex flex-1 items-stretch gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide sm:gap-5 sm:overflow-hidden"
                >
                    {items.map((item) => (
                        <article
                            key={item.title}
                            slider-data
                            className="flex flex-none basis-full items-center gap-3 snap-start py-1 sm:basis-1/3"
                        >
                            <div className="h-11 w-11 flex-shrink-0 overflow-hidden bg-neutral-200 sm:h-12 sm:w-12">
                                <img src={item.imgUrl} alt="" className="h-full w-full object-cover" loading="lazy" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-[0.7rem] font-medium leading-snug text-blink sm:text-xs">
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