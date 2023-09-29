"use client"

import { serverLogout } from "@/actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar(){
    const { push } = useRouter()

    function logout(){
        serverLogout()
        push('/login')
    }

    return(
        <nav className="bg-slate-900 p-4 flex gap-3 items-end">
            <Link href="/">
                <h1 className="text-3xl font-bold text-zinc-100 uppercase">Fiap Filmes</h1>
            </Link>
            <ul>
                <li>
                    <Link href="/favoritos">Favoritos</Link>
                    <Link href="#">Lançamentos</Link>
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>
      </nav>
    )    
}