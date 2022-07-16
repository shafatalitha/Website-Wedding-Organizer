import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>Wedding Organizer,</p>
                    <p>Oemah Manten</p>
                    <p>Oemah Manten bekerja sama dengan mitra terbaik untuk menjadikan hari pernikahanmu menjadi sangat berkesan.<br/> Tim kami sangat berpengalaman dalam mempersiapkan sebuah acara mulai dari konsep hingga eksekusi dengan<br/> budget yang disesuaikan dengan keinginan klien tanpa mengurangi kemeriahan dan esensi dari acaranya.</p>
                </div>
                <div className='col-2'>
                <iframe width="450" height="315" src="https://www.youtube.com/embed/CeiR8wYFax4" title="paket wedding organizer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Demo