import React from 'react'
import '../assets/style/card.scss'

const Card = (props) => {
  //console.log(props);
  return (
    <div className='card'>
      <button className='delete'>Sil</button>
      <button className='edit'>Düzenle</button>
        <img src={props.kitap.kitapResmi}alt={props.kitap.kitapAdi+"_kapak"}/>
        <div className='card-body'>
          <h4>Kitap Adı:{props.kitap.kitapAdi}</h4>
          <p>Yazar:{props.kitap.kitapYazari}</p>
          <p>Kategori :{props.kitap.kitapKategorisi}</p>
          <p>Sayfa Sayısı: {props.kitap.kitapSayfaSayisi}</p>
          <p>Açıklaması: {props.kitap.kitapAciklamasi}</p>
        </div>
    </div>
  )
}
 
export default Card