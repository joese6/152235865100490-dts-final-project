import { useEffect } from "react"

export default function Home(){
    useEffect(function(){
        document.title='Home'
    },[])
    return (
        <section className="section">
            <h1 className="section-title">Selamat Datang di Portal Antariksa</h1>
            <p className="section-description">Halo semua selamat datang, web ini menyajikan berita seputar penerbangan antariksa. Semoga bermanfaat !</p>
        </section>
    )
}