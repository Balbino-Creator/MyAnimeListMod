export function MainDetalles({anime}){
    console.log(anime);
    return(
        <>
        <main className="bg-white rounded-3xl p-10 pr-20 grid grid-cols-4 gap-20">
            <div className="col-span-1">
                <picture>
                    <img className="mx-auto w-4/5" src={anime.images.jpg.image_url} alt="" />
                </picture>
                <ul className="mt-5 divide-y divide-pink-400">
                    <li className="py-3"><span className="text-cyan-500 font-medium">Score:</span> {anime.score}/10</li>
                    <li className="py-3"><span className="text-cyan-500 font-medium">Members:</span> {anime.members}</li>
                    <li className="py-3"><span className="text-cyan-500 font-medium">Producers:</span> {anime.producers[0].name}</li>
                </ul>
            </div>
            <div className="col-span-3">
                <h1 className="text-4xl font-bold">{anime.title_japanese}</h1>
                <h2 className="text-2xl font-semibold">{anime.title}</h2>
                <p className="mt-10 font-semibold">Synopsis</p>
                <p className="mt-3 text-justify">{anime.synopsis}</p>
                <div>
                    <iframe
                            className="mt-14"
                            title="YouTube Video"
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                </div>
                        
            </div>
        </main>
        </>
    )
}