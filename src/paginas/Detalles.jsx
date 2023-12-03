import animes from "../animes.json"
import { useParams } from 'react-router-dom';
import { MainDetalles } from "../componentes/MainDetalles";
import {Footer} from "../componentes/Footer"

export function Detalles(){
    const { id } = useParams();
    const animesData = animes.data;
    const anime = animesData.find(anime => anime.mal_id == id);
    return(
        <>
            <div className="mx-auto my-0 w-4/5 mt-20">
                <MainDetalles anime={anime}/>
            </div>
            <Footer/>
        </>
    )
}