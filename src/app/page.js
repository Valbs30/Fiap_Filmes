import Titulo from '@/components/Titulo'

export default function Home() {
  return ( //JSX
    <>
      <nav className="bg-slate-900 p-4 flex gap-3 items-end">
        <h1 className="text-3xl font-bold text-zinc-100 uppercase">Fiap Filmes</h1>
        <ul>
          <li>
            <a href="#">Favoritos</a>
            <a href="#">Lançamentos</a>
          </li>
        </ul>
      </nav>

      <Titulo>Em Alta</Titulo>
      
    </>
  )
}
