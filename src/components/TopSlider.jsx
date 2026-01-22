import NewsCard from "./NewsCard";

export default function TopSlider() {
    let btnStyles = "flex-shrink-0 text-gray-500 hover:text-black text-xl md:text-2xl";
    return (
        <section className="bg-sliderBg">
            <div className="flex items-center gap-2 md:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-0 md:px-0">
                <button className={btnStyles}>&lt;</button>
                 
                <NewsCard
                 type='top-slider'
                 imgUrl='https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80'
                 title="Indonesia To Offer Infrastructure Projects At IMF-World Bank Meeting"
                />
                <NewsCard 
                 type="top-slider"
                 imgUrl=''
                />
                <NewsCard  
                 type="top-slider"
                 imgUrl="https://en.people.cn/mediafile/pic/BIG/20230914/45/3482817653402677945.png"
                 title="The Chinese smartphone upstarts taking on Apple and Samsung"
                />
                <NewsCard  
                 type="top-slider"
                 imgUrl="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iCIUTpL2msZo/v1/-1x-1.webp"
                 title="A Digital Media Startup Growing Up With Millennial Women"
                />
                <NewsCard  
                 type="top-slider"
                 imgUrl="https://news.mbcslu.com/wp-content/uploads/2020/03/news9.jpg"
                 title="Ngurah Rai International Airport To Close For 24 Hours For Nyepi"
                />

                <button className={btnStyles}>&gt;</button>
            </div>
        </section>
    )
}