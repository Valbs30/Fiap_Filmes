import CardFilme from "@/components/CardFilme";
import Titulo from "@/components/Titulo";

async function carregarDados(){
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}
// return json (.results exclusivo da api usada)

export default async function Home() {
  const filmes = await carregarDados()

  /* 
  //mock - dados ficticios
  [
    {
      id: 1,
      titulo: "Star Wars",
      nota: 9.5,
      poster: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/uLlrDUtFG2tKtDcJN6kBznlqqsp.jpg"
    },
    {
      id: 2,
      titulo: "Barbie",
      nota: 9.0,
      poster: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
    },
    {
      id: 3,
      titulo: "Missão Impossível",
      nota: 9.2,
      poster: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/8hjno4uE19pm0qlfUDcM8e5WK13.jpg"
    }
  ]
  */

  return ( //JSX
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

      <Titulo>Em Alta</Titulo>

      <section className="flex flex-wrap gap-2">
        {filmes.map(filme => <CardFilme filme={filme} /> )}
      </section>

      <Titulo>Lançamentos</Titulo>
      
    </>
  )
}
