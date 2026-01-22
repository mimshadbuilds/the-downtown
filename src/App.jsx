import NewsCard from './components/NewsCard'
import Header from './components/Header'
import SectionIndex from './components/SectionIndex'
import TopSlider from './components/TopSlider'

function App() {

  return (
    <div className='min-h-screen bg-white'>
    <Header />
    
    <main className='container mx-auto px-4 py-6'>
      <SectionIndex title='The Latest' />
      <TopSlider />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 -mt-2 md:-mt-4'>
        
        <div className='flex flex-col gap-2 md:gap-4 lg:gap-6'>
          <NewsCard 
          type='left-sidebar' 
          imgUrl= "https://www.mensfitness.com/.image/c_fill,w_1200,h_900,g_faces:center/MTk2MTM2NDE0NDczMTAyODUz/man-doing-pilates.jpg" 
          title='Unconventional Workout That Torch Fat And Sculpt Muscle of Indigenous'
           />
           <NewsCard 
            type='left-sidebar'
            imgUrl="https://img.jakpost.net/c/2018/03/16/2018_03_16_42368_1521170859._large.jpg"
            title="Millions of Indonesians May Lose Voting Rights: Alliance" 
           />
           <NewsCard
           type='left-sidebar'
           imgUrl="http://maatimaa.com/wp-content/uploads/2025/02/fashion3.jpg"
           title="Crisomeini Dwi Putri, RI's Track Cycling Athlete for Asian Games"
           />
           <NewsCard
            type='left-sidebar'
            imgUrl="https://img.jakpost.net/c/2018/02/23/2018_02_23_41156_1519365781._large.jpg"
            title="President Joko “Jokowi” Widodo Refuses to Sign MD3 Law"
           />
        </div>
        
          
          <NewsCard
            type='middle-column'
            imgUrl="https://images2.imgbox.com/39/22/zr8k86T3_o.jpg"
            category="POLITICS"
            title="'Election was rigged' says opposition, police confirm three dead"
            detail="When we get out of the glass bottle of our ego and when we escape like the squirrels in the..."
            author="JOHN DOE | October 12, 2024 | 0:00"
            btnText="READ MORE"
          />

          
          <div className='flex flex-col gap-2 md:gap-4 lg:gap-6'>
            <NewsCard
            category="OPINION"
            imgUrl="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
            type='right-sidebar'
            title="Democratic Party politician calls Prabowo 'cardboard general'"
            detail="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
            author="JOHN DOE | August 14, 2018"
           />
           <NewsCard
            category="LIFESTYLE"
            imgUrl="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
            type='right-sidebar'
            title="Google tracks location data even when users turn service off"
            detail="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
           />
          </div>
      </div>

      {/* opinion column */}
      <SectionIndex title='Opinion' className='mt-6 md:mt-8' />
      <div className='flex flex-col gap-2 text-sm'>
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
