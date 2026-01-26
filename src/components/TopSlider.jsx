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

    let btnStyles = 'flex h-8 w-8 flex-shrink-0 items-center justify-center border border-yelloish text-base text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-blink sm:h-9 sm:w-9 sm:text-lg md:h-10 md:w-10'

    return (
        <section className="rounded border border-yelloish bg-white px-2 py-2 shadow-sm sm:rounded-none sm:border-0 sm:border-b sm:px-3 sm:py-3 sm:shadow-none md:px-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
                <button className={btnStyles} onClick={handlePrev}>‹</button>
                <div
                    ref={refSlider}
                    className="flex flex-1 items-stretch gap-2.5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide sm:gap-4 sm:overflow-hidden md:gap-5"
                >
                    {items.map((item) => (
                        <article
                            key={item.title}
                            slider-data
                            className="flex flex-none basis-full items-center gap-2 snap-start py-0.5 sm:basis-1/3 sm:gap-3 sm:py-1"
                        >
                            <div className="h-10 w-10 flex-shrink-0 overflow-hidden bg-neutral-200 sm:h-11 sm:w-11 md:h-12 md:w-12">
                                <img src={item.imgUrl} alt="" className="h-full w-full object-cover" loading="lazy" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-[0.7rem] font-medium leading-snug text-blink sm:text-xs md:text-sm">
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