const NewsCard = ({ type ='mini', imgUrl, category, title, detail, author, date }) => {

    const titleClass = 'text-blink transition-colors hover:text-neutral-700'
    let categoryClass = 'text-xs font-semibold uppercase text-neutral-500'

    if (type === 'hero') {
        return (
            <article className='border-b border-yelloish pb-6'>
                <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
                    <div className="bg-neutral-100 overflow-hidden">
                        <img src={imgUrl} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className={categoryClass}>{category}</p>
                        <h3 className={`text-2xl font-semibold leading-tight ${titleClass}`}>{title}</h3>
                        <p className="text-sm leading-relaxed text-neutral-600">{detail}</p>
                        <div className="text-[0.7rem] uppercase text-neutral-500">{author} . {date}</div>
                        <button className="w-fit border border-blink px-4 py-2 text-[0.7rem] uppercase text-blink transition-colors hover:bg-blink hover:text-white">Read More
                        </button> 
                    </div>
                </div>
            </article>
        )
    }

    if (type === 'featured') {
        return (
            <article className="w-full border border-yelloish bg-white overflow-hidden shadow-md">
                <div className="relative w-full bg-neutral-200 overflow-hidden">
                    <img src={imgUrl} alt="" className="h-48 w-full object-cover sm:h-64 md:h-80 lg:h-96" loading="lazy" />
                    <span className="absolute bottom-2 left-3 inline-block text-[0.6rem] font-semibold uppercase text-gray-500 sm:bottom-3 sm:left-6 sm:text-[0.65rem]">
                        {category}
                    </span>
                </div>
                <div className="relative z-10 w-full bg-white px-3 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-5 md:mx-6 md:-mt-10  md:w-auto">
                    <h3 className={`text-base font-semibold leading-tight ${titleClass} sm:text-xl md:text-2xl lg:text-3xl`}>
                    {title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.65rem] text-neutral-500 sm:mt-4 sm:gap-x-2 sm:text-xs">
                        <span className="italic text-neutral-400">by</span>
                        <span className="font-semibold uppercase text-neutral-600">{author}</span>
                        <span className="text-neutral-400">and 1 others</span>
                        <span className="text-neutral-400">·</span>
                        <span>{date}</span>
                        <span className="text-neutral-400">·</span>
                        <span>0</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:mt-4 sm:text-sm">{detail}</p>
                    <button className="mt-3 w-fit border border-yelloish px-3 py-1.5 text-[0.65rem] uppercase text-blink transition-colors hover:bg-blink hover:text-white sm:mt-4 sm:px-4 sm:py-2 sm:text-[0.7rem]">
                    READ MORE
                    </button>
                </div>
            </article>
        )
    }

    if (type === 'right-sidebar') {
        return (
            <article className="w-full overflow-hidden bg-white shadow-md">
                <div className="w-full overflow-hidden bg-neutral-200">
                <img
                    src={imgUrl}
                    alt=""
                    className="h-44 w-full object-cover sm:h-48 md:h-56"
                    loading="lazy"
                />
                </div>
                <div className="space-y-1.5 p-3 sm:space-y-2 sm:p-4">
                <p className={categoryClass}>{category}</p>
                <h3 className={`text-sm font-semibold leading-snug ${titleClass} sm:text-base md:text-lg`}>
                    {title}
                </h3>
                {detail && <p className="text-xs text-neutral-600 sm:text-sm">{detail}</p>}
                {(author || date) && (
                <div className="text-[0.65rem] uppercase text-neutral-500 sm:text-[0.7rem]">
                    {author} {author && date && '·'} {date}
                </div>
                )}
                </div>
            </article>
        )
    }

    if (type === 'left-sidebar') {
        return (
        <article className="flex w-full gap-2 overflow-hidden border-b border-yelloish pb-2.5 sm:gap-3 sm:pb-3"> 
            <div className="h-12 w-14 flex-shrink-0 overflow-hidden bg-neutral-200 sm:h-14 sm:w-16">
            <img
                src={imgUrl}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
            />
            </div>
            <div className="min-w-0 flex-1 space-y-0.5">
                <h3 className={`text-xs font-semibold leading-snug ${titleClass} sm:text-sm`}>
                    {title}
                </h3>
            </div>
        </article>
        )
    }

    return (
        <article className="w-full overflow-hidden bg-white shadow-md">
            <div className="w-full overflow-hidden bg-neutral-200">
                <img src={imgUrl} alt="" className="h-36 w-full object-cover sm:h-40 md:h-44" loading="lazy" 
                />
            </div>
            <div className="space-y-1.5 p-3 text-center sm:space-y-2 sm:p-4"> 
                <span className="inline-block text-[0.6rem] font-semibold uppercase text-neutral-500 sm:text-[0.65rem]">
                    {category}
                </span>
                <h3 className={`text-sm font-semibold leading-snug ${titleClass} sm:text-base`}>{title}
                </h3>
                {detail ? (
                    <p className="text-xs text-neutral-600 sm:text-sm">{detail}</p>
                ) : null}
                {date ? (
                    <div className="text-[0.65rem] text-neutral-500 uppercase sm:text-[0.7rem]">
                        {date}
                    </div> 
                ) : null}
            </div>
        </article>
    )
}

export default NewsCard;
