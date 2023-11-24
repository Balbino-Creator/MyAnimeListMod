import { Header } from "../componentes/Header"
import { ArticlesGrid } from "../componentes/ArticlesGrid"
import { Footer } from "../componentes/Footer"
export function Principal(){
    return(
        <>
        <div className='mx-auto container'>
        <Header/>
        <ArticlesGrid/>
        </div>
        <Footer/>
        </>
    )
}