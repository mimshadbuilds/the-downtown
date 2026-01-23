import NewsCard from './components/NewsCard'
import Header from './components/Header'
import SectionIndex from './components/SectionIndex'
import TopSlider from './components/TopSlider'

const latestNews = [
  {
    type: 'left-sidebar',
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
    image:
      '',
  },
  {
    title: 'Presidential trials new travel destinations',
    image:
      '',
  },
  {
    title: 'A digital media startup growing with millennials',
    image:
      '',
  },
  {
    title: 'Presidential trials new travel destinations',
    image:
      '',
  },
]

const mainNews = {
  title: '“Election was rigged” says opposition, police confirm three dead',
  category: 'Politics',
  detail:
    'When we get out of the glass bottle of our ego and when we escape like the squirrels in the wheel...',
  image:
    "https://images2.imgbox.com/39/22/zr8k86T3_o.jpg",
  author: 'John Doe',
  date: 'February 17, 2020',
}

const sideNews = [
  {
    title: 'Grab tackles Jakarta’s odd-even license plate policy with special algorithm',
    category: 'Culture',
    image:
      '',
    date: 'February 18, 2020',
  },
  {
    title: 'Jokowi supporters try to prevent anti-Jokowi activist from entering Batam',
    category: 'Lifestyle',
    image:
      '',
    date: 'February 18, 2020',
  },
]

const featuredNews = {
  title: 'Democratic party politician calls Prabowo “cardboard general”',
  category: 'Opinion',
  detail:
    'Even the all-powerful plotting has no control about the blind tests. It is an almost unorthographic life...',
  image:
    '',
  author: 'John Doe',
  date: 'August 10, 2018',
}

const sidebarNews = [
  {
    title: 'Google tracks location data even when users turn service off',
    category: 'Lifestyle',
    detail:
      'Even the all-powerful plotting has no control about the blind tests.',
    image:
      '',
    author: 'John Doe',
    date: 'August 14, 2018',
  },
]


const App = () => {

  return (
    <div className='min-h-screen bg-white text-blink'>
    <Header />
    
    <main className='container mx-auto px-4 py-6'>
      <TopSlider />
      <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)_300px] md:grid-cols-[220px_minmax(0,1fr)]">
        <section className='space-y-6'>
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
          <ul className='space-y-3 text-sm leading-relaxed text-neutral-700'>
            {opinionItems.map((item) => (
              <li key={item} className='border-b border-yellowish pb-3'>
                <a className='transition-colors hover:text-blink' href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className='space-y-8'>
          <TopSlider items={topSliderItems} />
          <NewsCard type='featured' {...mainNews} />
          <div className='grid gap-6 sm:grid-cols-2'>
            {sideNews.map((item) => (
              <NewsCard key={item.title} {...item} />
            )
            )}
          </div>
        </section>

        <section className='space-y-6 md-col-span-2 lg:col-span-1'>
          <NewsCard type='sidebar' {...featuredNews} />
          <div className='space-y-6'>
            {sidebarNews.map((items) => (
              <NewsCard key={items.title} type='sidebar' {...items} />
            )
            )}
          </div>
        </section>
      </div>
    </main>
    </div>
  )
}

export default App
