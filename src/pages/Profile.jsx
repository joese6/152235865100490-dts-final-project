import { useEffect } from "react"

export default function Profile(){
    useEffect(function(){
        document.title='Profile'
    },[])
    return (
        <section className="section">
            <h1 className="section-title">Profile saya</h1>
            <p className="section-description">Saya adalah junior web developer basis ReactJS</p>
            <p className="section-description">Nama : Zohan Fachrullwahab</p>
        </section>
        )
}