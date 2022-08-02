import { useEffect } from "react"

export default function Contact(){
    useEffect(function(){
        document.title='Contact'
    },[])
    return (
        <section className="section">
        <h1 className="section-title">Contact</h1>
        <p className="section-description">Anda dapat berinteraksi dengan saya melalui:</p>
        <ul>
            <li>Telegram ID : @johanwahab </li>
            <li>E-mail : joese6@gmail.com</li>
        </ul>
        <p>Atau pantau terus sosmedku</p>
        <ul>
            <li><a href="https://facebook.com/cahnganjuk">Facebook</a></li>
            <li><a href="https://instagram.com/zohanwahab">Instagram</a></li>
             
        </ul>
    </section>
        )
}