import { componentWithChildren } from '@/utils/types'
import HomeNav from '../Header/HomeNav'
import Footer from '../Footer/Footer'

export default function Layout({ children }:componentWithChildren) {
    return (
        <main>
            <HomeNav />
            <div className='pb-20'>
            {children}
            </div>
            <Footer/>
        </main>
    )
}