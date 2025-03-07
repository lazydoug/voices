import { Bricolage_Grotesque } from 'next/font/google'
import '../globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Inspired Voices',
  description:
    'Inspired Voices is a mental health movement dedicated to amplifying stories of resilience, breaking the stigma, and fostering a supportive community. Join us in empowering voices, embracing mental health awareness, and inspiring healing through shared experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${bricolageGrotesque.className} bg-purple-98 min-w-80 antialiased`}
      >
        <header>
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
