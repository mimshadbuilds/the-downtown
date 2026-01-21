import NewsCard from './components/NewsCard'
import Header from './components/Header'
import SectionIndex from './components/SectionIndex'

function App() {

  return (
    <div className='min-h-screen bg-white'>
    <Header />
    <main className='container mx-auto px-4 py-8'>
      <SectionIndex title='The Latest' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* left column */}
        <div className='flex flex-col gap-6'>
          <NewsCard 
          category='small' 
          image={true} 
          title='Unconventional Workout That Torch Fat And Sculpt Muscle of Indigenous'
          detail='That Torch Fat And Sculpt Muscle'
           />
           <NewsCard 
            category='small'
            image={true}
            title="Millions of Indonesians May Lose Voting Rights: Alliance"
            detail='People May Lose Voting Rights' 
           />
           <NewsCard
           category='small'
           image={true}
           title="Crisomeini Dwi Putri, RI's Track Cycling Athlete for Asian Games"
           detail="Track Cycling Athlete for Asian Games"
           />
           <NewsCard
            category='small'
            image={true}
            title="President Joko “Jokowi” Widodo Refuses to Sign MD3 Law"
            detail= 'Refuses to Sign MD3 Law'
           />
        </div>

        {/* middle column */}  
          <NewsCard
            category='large'
            image={true}
            title="'Election was rigged' says opposition, police confirm three dead"
            detail="When we get out of the glass bottle of our ego and when we escape like the squirrels in the..."
            author="JOHN DOE | October 12, 2024 | 0:00"
            buttonText="READ MORE"
          />

          {/* right column */}
          <div className='flex flex-col gap-6'>
            <NewsCard
            image={true}
            category='right-sidebar'
            title="Democratic Party politician calls Prabowo 'cardboard general'"
            detail="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
            author="JOHN DOE | August 14, 2018"
           />
           <NewsCard
            image={true}
            category='right-sidebar'
            title="Google tracks location data even when users turn service off"
            detail="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
           />
          </div>
      </div>

      {/* opinion column */}
      <SectionIndex title='Opinion' className='mt-8' />
      <div className='flex flex-col gap-4 text-sm'>
        <p>▶ Tour showcases shared art history of Indonesia and Singapore</p>
        <p>▶ Finland Has An Education System The Other Country Should Learn From</p>
        <p>▶ Country Should Learn From</p>
        <p>▶ Women In Politics: Urgency Of Quota System For Women In Regional Elections</p>
        <p>▶ For Women In Regional Elections</p>
        <p>▶ China’s Peng banned and fined for Wimbledon corruption attempt</p>
        <p>▶ Democratic Party politician calls Prabowo</p>
      </div>
    </main>
    </div>
  )
}

export default App
