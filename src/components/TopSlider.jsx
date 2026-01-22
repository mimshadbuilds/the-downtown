import NewsCard from "./NewsCard";

export default function TopSlider() {
    let btnStyles = "flex-shrink-0 text-gray-500 hover:text-black text-xl md:text-2xl";
    return (
        <section className="bg-sliderBg py-2 md:py-4">
            <div className="flex items-center gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                <button className={btnStyles}>&lt;</button>
                 
                <NewsCard
                 type='top-slider'
                 img={true}
                 title="Indonesia To Offer Infrastructure Projects At IMF-World Bank Meeting"
                />
                <NewsCard 
                 type="top-slider"
                 img={true}
                 title="Presidential Train Now Available For Jakartans Traveling To Bandung"
                />
                <NewsCard  
                 type="top-slider"
                 img={true}
                 title="The Chinese smartphone upstarts taking on Apple and Samsung"
                />
                <NewsCard  
                 type="top-slider"
                 img={true}
                 title="A Digital Media Startup Growing Up With Millennial Women"
                />
                <NewsCard  
                 type="top-slider"
                 img={true}
                 title="Ngurah Rai International Airport To Close For 24 Hours For Nyepi"
                />

                <button className={btnStyles}>&gt;</button>
            </div>
        </section>
    )
}