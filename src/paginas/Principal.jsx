import { Header } from "../componentes/Header"
import { ArticlesGrid } from "../componentes/ArticlesGrid"
import { Footer } from "../componentes/Footer"
import { useState } from "react";
import animes from "../animes.json"

export function Principal(){
    const [search, setSearch] = useState (''); 
    const animesFiltrados = animes.data.filter((anime) =>{
        const title = anime.title;

        if(search ===''){
            return true;
        }
        if(title !== null){
            return title.toString().toLowerCase().includes(search.toLowerCase());
        }
      });
    return(
        <>
        <div className='mx-auto container'>
        <Header search={search} setSearch={setSearch}/>
        <ArticlesGrid search={search} animesFiltrados={animesFiltrados}/>
        </div>
        <Footer/>
        </>
    )
}