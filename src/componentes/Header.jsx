export function Header() {
  return (
    <>
        <header className="text-center mt-40">
          <h1 className="inline text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-500">Buscar Anime</h1>
          <form action="#">
            <input type="text" className="outline-none placeholder:text-slate-400 text-slate-400 bg-gray-800 border-b-pink-600 border-b-2 mt-32 text-center placeholder:text-center placeholder:text-3xl text-3xl w-1/3 h-10" placeholder="Nombre del anime"/>
          </form>
        </header>
    </>
  )
}