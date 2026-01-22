export default function NewsCard({type='left-sidebar', imgUrl = '', category = '', title, detail, author, btnText}) {

    let cardClass = 'bg-white rounded-md transition-shadow hover:shadow-md overflow-hidden';
    let imgClass = imgUrl ? 'w-full h-full object-cover' : 'bg-gray-300 w-full h-full';
    let mainContent = 'p-2 md:p-3';

    if (type === 'left-sidebar'){
        cardClass += ' flex gap-2 items-center';
        imgClass += ' h-16 w-16 flex-shrink-0 object-cover rounded';
        mainContent += ' text-base font-semibold line-clamp-2';
    } else if (type === 'middle-column'){
        cardClass += ' flex flex-col';
        imgClass += ' h-32 md:h-40 lg:h-52';
        mainContent += 'space-y-1'
    } else if (type === 'right-sidebar'){
        cardClass += ' flex flex-col';
        imgClass += ' h-24 md:h-28 lg:h-40';
        mainContent += ' space-y-1'
    } else if (type === 'top-slider'){
        cardClass += ' flex items-center gap-2 min-w-[180px] md:min-w-[220px] snap-center shadow-none bg-transparent';
        imgClass += ' h-10 w-14 rounded';
        mainContent += ' text-xs font-medium line-clamp-2';
    }

    const categoryClass = category === 'POLITICS' 
    ? '' 
    : category === 'LIFESTYLE' 
    ? 'bg-pinkish' 
    : 'bg-accent';

    return (
        <article className={cardClass}>
            <div className="relative h-16 md:h-auto">
                { imgUrl ? (
                    <img src={imgUrl} alt={title} className={imgClass} loading="lazy" />)
                    : ( 
                    <div className={imgClass} /> 
                )}
                {category && type === 'right-sidebar' && (
                    <span className={`absolute top-2 left-2 px-1 py-0.5 text-xs uppercase font-bold text-white rounded ${categoryClass}`}>{category}</span>
                )}
            </div>
            <div className={mainContent}>
                {category && type !== 'right-sidebar' && (
                    <span className={`block mb-1 px-1 py-0.5 text-xs uppercase font-bold text-white rounded ${categoryClass}`}>{category}</span>
                )}
                <h3 className={`${type === 'middle-column' ? 'text-2xl' : type === 'right-sidebar' ? 'text-lg' : 'text-base'} font-bold`}>{title}</h3>
                {detail && <p className="text-sm text-gray-600 line-clamp-2">{detail}</p>}
                {author && <p className="text-gray-500 text-xs">{author}</p>}
                {btnText && (
                <button className="mt-2 px-3 py-1 md:px-4 md:py-2 bg-blink text-white text-xs md:text-sm rounded uppercase">
                    {btnText}
                </button>
                )}
            </div>
        </article>
    )
}
