import CardFilme from "@/components/CardFilme";
import Titulo from "@/components/Titulo";

async function carregarDados(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
        }
      };
      
      const response = await fetch('https://api.themoviedb.org/3/account/9269654/watchlist/movies?language=pt-br&page=1&sort_by=created_at.asc', options)
      const json = await response.json()
      console.log(json)
      return json.results
}

export default async function Favoritos() {
  
  const filmes = await carregarDados() 
  console.log(filmes)

  return (
    <>
      <nav className="bg-slate-900 p-4 flex gap-3 items-end">
        <h1 className="text-3xl font-bold text-zinc-100 uppercase">Fiap Filmes</h1>
        <ul>
          <li>
            <a href="/favoritos">Favoritos</a>
            <a href="#">Lançamentos</a>
          </li>
        </ul>
      </nav>

      <Titulo>Favoritos</Titulo>

      <section className="flex flex-wrap gap-2">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>
    
    </>
  )
}
