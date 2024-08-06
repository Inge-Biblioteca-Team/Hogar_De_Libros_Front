import { ReactNode } from 'react'
import Header from '../components/Layout/Header'

const Layout = ({children, NavbarType}:{children:ReactNode, NavbarType:string}) => {
  return (
    <>
    <Header NavBarType={NavbarType}/>
    <main>
    {children}
    </main>
    </>
  )
}

export default Layout
