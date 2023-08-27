import Image from 'next/image'
import Header from './Components/Header/Header'
import Notice from './Components/Notice/Notice'
import HomeContent from './Components/HomeContent/HomeContent'
import UsefulLinks from './Components/UsefulLinks/UsefulLinks'


export const metadata = {
  title: 'School Management',
  description: 'Description of the School',
}

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header />
      <Notice />
      <HomeContent />
      <UsefulLinks />
    </main>
  )
}
