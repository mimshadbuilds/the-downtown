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
            <article className="border border-yelloish bg-white">
                <div className="relative aspect-[16/9] w-full sm:aspect-[16/8] bg-neutral-200 overflow-hidden">
                    <img src={imgUrl} alt="" className="h-64 w-full object-cover sm:h-80 md:h-96" loading="lazy" />
                    <span className="absolute bottom-3 left-6 inline-block text-[0.65rem] font-semibold uppercase text-white">
                        {category}
                    </span>
                </div>
                <div className="relative z-10 -mt-10 bg-white px-4 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-5 sm:mx-6 sm:-mt-14 sm:border sm:border-yelloish">
                    <h3 className={`text-2xl font-semibold leading-tight ${titleClass} sm:text-2xl md:text-3xl`}>
                    {title}
                    </h3>
                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-neutral-500">
                        <span className="italic text-neutral-400">by</span>
                        <span className="font-semibold uppercase text-neutral-600">{author}</span>
                        <span className="text-neutral-400">and 1 others</span>
                        <span className="text-neutral-400">·</span>
                        <span>{date}</span>
                        <span className="text-neutral-400">·</span>
                        <span>0</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-600">{detail}</p>
                    <button className="mt-4 w-fit border border-blink px-4 py-2 text-[0.7rem] uppercase text-blink transition-colors hover:bg-blink hover:text-white">
                    Read More
                    </button>
                </div>
            </article>
        )
    }

    if (type === 'right-sidebar') {
        return (
            <article className="space-y-3">
                <div className="overflow-hidden bg-neutral-200">
                <img
                    src={imgUrl}
                    alt=""
                    className="h-48 w-full object-cover"
                    loading="lazy"
                />
                </div>
                <div className="space-y-2">
                <p className={categoryClass}>{category}</p>
                <h3 className={`text-lg font-semibold leading-snug ${titleClass}`}>
                    {title}
                </h3>
                <p className="text-sm text-neutral-600">{detail}</p>
                <div className="text-[0.7rem] uppercase text-neutral-500">
                    {author} · {date}
                </div>
                </div>
            </article>
        )
    }

    if (type === 'left-sidebar') {
        return (
        <article className="flex gap-2 xs:flex-row xs:gap-3 border-b border-yelloish pb-3"> 
            <div className="h-14 w-16 flex-shrink-0 overflow-hidden bg-neutral-200">
            <img
                src={imgUrl}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
            />
            </div>
            <div className="space-y-1">
                <h3 className={`text-sm font-semibold leading-snug ${titleClass}`}>
                    {title}
                </h3>
            </div>
        </article>
        )
    }

    return (
        <article className="space-y-3 border-b border-yelloish pb-4">
            <div className="overflow-hidden bg-neutral-200">
                <img src={imgUrl} alt="" className="h-40 w-full object-cover" loading="lazy" 
                />
            </div>
            <div className="space-y-2 text-center"> 
                <span className="inline-block text-[0.65rem] font-semibold uppercase text-neutral-500">
                    {category}
                </span>
                <h3 className={`text-base font-semibold leading-snug ${titleClass}`}>{title}
                </h3>
                {detail ? (
                    <p className="text-sm text-neutral-600">{detail}</p>
                ) : null}
                {date ? (
                    <div className="text-[0.7rem] text-neutral-500 uppercase">
                        {date}
                    </div> 
                ) : null}
            </div>
        </article>
    )
}

export default NewsCard;
