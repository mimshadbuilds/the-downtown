export default function NewsCard({type='left-sidebar', img = false, category = '', title, detail, author, btnText}) {

    let cardClass = 'bg-white rounded-lg transition-shadow hover:shadow-md overflow-hidden';
    let imgClass = 'bg-gray-300';
    let mainContent = 'p-2 md:p-3 lg:p-4';

    if (type === 'left-sidebar'){
        cardClass += ' flex gap-2 md:gap-4 items-center';
        imgClass += ' h-16 md:h-20 w-16 md:w-20 flex-shrink-0 object-cover rounded';
        mainContent += ' flex flex-col justify-center text-sm md:text-base';
    } else if (type === 'middle-column'){
        cardClass += ' shadow-md';
        imgClass += ' w-full h-32 md:h-40 lg:h-56 object-cover';
        mainContent += 'space-y-1 md:space-y-2'
    } else if (type === 'right-sidebar'){
        cardClass += ' flex flex-col';
        imgClass += ' w-full h-24 md:h-28 lg:h-36 object-cover';
        mainContent += ' space-y-1 text-sm'
    } else if (type === 'top-slider'){
        cardClass += ' flex items-center gap-2 min-w-[200px] md:min-w-[250px] snap-center';
        imgClass += ' h-12 md:h-16 w-16 md:w-20 flex-shrink-0 object-cover rounded';
        mainContent += ' text-xs md:text-sm font-medium line-clamp-2';
    }

    const categoryClass = category === 'POLITICS' 
    ? '' 
    : category === 'LIFESTYLE' 
    ? 'bg-pinkish' 
    : 'bg-accent';

    return (
        <article className={cardClass}>
            {img && <div className={imgClass} />}
            <div className={mainContent}>
                {category && (
                    <span className={`inline-block px-2 py-1 text-xs uppercase font-semibold text-gray-200 rounded ${categoryClass}`}>{category}</span>
                )}
                <h3 className="font-bold text-lg md:text-xl line-clamp-2">{title}</h3>
                {detail && <p className="text-gray-600 line-clamp-2 md:line-clamp-3 text-xs md:text-sm">{detail}</p>}
                {author && <p className="text-gray-500 text-xs mt-1">{author}</p>}
                {btnText && (
                <button className="mt-2 px-3 py-1 md:px-4 md:py-2 bg-blink text-white text-xs md:text-sm rounded uppercase">
                    {btnText}
                </button>
                )}
            </div>
        </article>
    )
}
