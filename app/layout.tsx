import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import RegisterModal from './components/modals/RegisterModal'
import { Toaster } from 'react-hot-toast'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'

const font = Nunito({
  subsets: ["latin"]
})

export const metadata = {
  title: 'AirBnb Clone',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        <RentModal/>
        <LoginModal />
        <RegisterModal/>
        <Navbar currentUser = {currentUser}/>
        <div className='pb-20 pt-28'>
          {children}
        </div>
        
        </body>
    </html>
  )
}
