import { componentWithChildren } from '@/utils/types'
import HomeNav from '../Header/HomeNav'

export default function Layout({ children }:componentWithChildren) {
    return (
        <main>
            <HomeNav />
            <div className='pb-20'>
            {children}
            </div>
         
        </main>
    )
}