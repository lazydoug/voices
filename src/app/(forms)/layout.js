import { Bricolage_Grotesque } from 'next/font/google'
import '../globals.css'

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${bricolageGrotesque.className} bg-gradient-to-b from-[#6f1455] to-[#200311] bg-fixed antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
