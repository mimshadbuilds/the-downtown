import NewsCard from './components/NewsCard'
import Header from './components/Header'
import SectionIndex from './components/SectionIndex'
import TopSlider from './components/TopSlider'

const latestNews = [
  {
    imgUrl: "https://www.mensfitness.com/.image/c_fill,w_1200,h_900,g_faces:center/MTk2MTM2NDE0NDczMTAyODUz/man-doing-pilates.jpg",
    title: 'Unconventional Workout That Torch Fat And Sculpt Muscle of Indigenous'
  },
  {
    imgUrl: "https://img.jakpost.net/c/2018/03/16/2018_03_16_42368_1521170859._large.jpg",
    title: "Millions of Indonesians May Lose Voting Rights: Alliance"
  },
  {
    imgUrl: "http://maatimaa.com/wp-content/uploads/2025/02/fashion3.jpg",
    title: "Crisomeini Dwi Putri, RI's Track Cycling Athlete for Asian Games"
  },
  {
    imgUrl: "https://img.jakpost.net/c/2018/02/23/2018_02_23_41156_1519365781._large.jpg",
    title: "President Joko “Jokowi” Widodo Refuses to Sign MD3 Law"
  }
]

const opinionItems = [

  '▶ Tour showcases shared art history of Indonesia and Singapore',
  '▶ Finland Has An Education System The Other Country Should Learn From',
  '▶ Country Should Learn From',
  '▶ Women In Politics: Urgency Of Quota System For Women In Regional Elections',
  '▶ For Women In Regional Elections',
  '▶ China’s Peng banned and fined for Wimbledon corruption attempt',
  '▶ Democratic Party politician calls Prabowo'
]

const topSliderItems = [
  {
    title: 'The chases new smartphone startups',
    imgUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'Presidential trials new travel destinations',
    imgUrl:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'A digital media startup growing with millennials',
    imgUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'Presidential trials new travel destinations',
    imgUrl:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=500&q=80',
  },
]

const mainNews = {
  title: '“Election was rigged” says opposition, police confirm three dead',
  category: 'Politics',
  detail:
    'When we get out of the glass bottle of our ego and when we escape like the squirrels in the wheel...',
  imgUrl:
    "https://images2.imgbox.com/39/22/zr8k86T3_o.jpg",
  author: 'John Doe',
  date: 'February 17, 2020',
}

const sideNews = [
  {
    title: 'Grab tackles Jakarta’s odd-even license plate policy with special algorithm',
    category: 'Culture',
    imgUrl:
      'https://images2.imgbox.com/df/c1/hYicqyS4_o.jpg',
  },
  {
    title: 'Jokowi supporters try to prevent anti-Jokowi activist from entering Batam',
    category: 'Lifestyle',
    imgUrl:
      'https://images2.imgbox.com/79/1d/LP9y0wc2_o.jpg',
    date: 'February 18, 2020',
  },
]

const featuredNews = {
  title: 'Democratic party politician calls Prabowo “cardboard general”',
  category: 'Opinion',
  detail:
    'Even the all-powerful plotting has no control about the blind tests. It is an almost unorthographic life...',
  imgUrl:
    'https://images2.imgbox.com/45/a7/jvo8zGQE_o.jpg',
  author: 'John Doe',
  date: 'August 10, 2018',
}

const sidebarNews = [
  {
    title: 'Google tracks location data even when users turn service off',
    category: 'Lifestyle',
    detail:
      'Even the all-powerful plotting has no control about the blind tests.',
    imgUrl:
      'https://images2.imgbox.com/b1/9c/PF9wkhyb_o.jpg',
    author: 'John Doe',
    date: 'August 14, 2018',
  },
]


const App = () => {

  return (
    <div className='min-h-screen bg-[#f9f9f7] text-blink'>
    <Header />  
    <main className='mx-auto w-full max-w-7xl overflow-hidden px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8'>
      <div className="grid gap-5 sm:gap-6 md:grid-cols-[200px_minmax(0,1fr)] md:gap-7 lg:grid-cols-[240px_minmax(0,1fr)_280px] lg:gap-8">
        <section className='hidden space-y-5 md:block md:space-y-6'>
          <SectionIndex title='The Latest' />
          <div className='space-y-4'>
            {latestNews.map((news) => (
              <NewsCard key={news.title}
              type='left-sidebar'
              {...news}
              />
            ))}
          </div>

        <SectionIndex title='Opinion' />
          <ul className='space-y-2.5 text-xs leading-relaxed text-neutral-700 sm:text-sm'>
            {opinionItems.map((item) => (
              <li key={item} className='border-b border-yelloish pb-2.5'>
                <a className='transition-colors hover:text-blink' href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className='min-w-0 space-y-5 sm:space-y-6 md:space-y-7'>
          <TopSlider items={topSliderItems} />
          <NewsCard type='featured' {...mainNews} />
          <div className='grid gap-5 sm:grid-cols-2 sm:gap-6'>
            {sideNews.map((item) => (
              <NewsCard key={item.title} {...item} />
            )
            )}
          </div>
        </section>

        <aside className='min-w-0 space-y-5 sm:space-y-6 md:col-span-2 lg:col-span-1'>
          <NewsCard type='right-sidebar' {...featuredNews} />
          <div className='space-y-5 sm:space-y-6'>
            {sidebarNews.map((items) => (
              <NewsCard key={items.title} type='right-sidebar' {...items} />
            )
            )}
          </div>
        </aside>
      </div>
    </main>
    </div>
  )
}

export default App
