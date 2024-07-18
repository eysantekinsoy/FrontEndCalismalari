import React, { useContext } from 'react'
import '../assets/style/forms.scss'
import DataContext from '../context/DataContext'

const Forms = () => {
  const {state,dispatch,handleSubmit}=useContext(DataContext);
  const {kitapAdi,kitapYazari,kitapKategorisi,kitapSayfaSayisi,kitapResmi,kitapAciklamasi,secilenKitap}=state

  return (
    //case_6-11
    <form onSubmit={handleSubmit}>
      <h3>{secilenKitap?"Kitap Düzenle":"Kitap Ekle"}</h3>
      <input value={kitapAdi} onChange={e=>dispatch({type:"kitapAdi",payload:e.target.value})} type="text" placeholder='Kitap Adı' />
      <input value={kitapYazari} onChange={e=>dispatch({type:"kitapYazari",payload:e.target.value})}  type="text" placeholder='Kitap Yazarı' />
      <select value={kitapKategorisi} onChange={e=>dispatch({type:"kitapKategorisi",payload:e.target.value})} >
        <option>Kategori Seçiniz</option>
        <option>Yazılım</option>
        <option>Tarih</option>
        <option>Roman</option>
        <option>Finans</option>
        <option>Diğer</option>
      </select>
      <input value={kitapSayfaSayisi} onChange={e=>dispatch({type:"kitapSayfaSayisi",payload:e.target.value})}  type="number" placeholder='Sayfa Sayısı' />
      <input value={kitapResmi} onChange={e=>dispatch({type:"kitapResmi",payload:e.target.value})}  type="url" placeholder='Kitap Resmi(URL)' />
      <textarea value={kitapAciklamasi} onChange={e=>dispatch({type:"kitapAciklamasi",payload:e.target.value})} placeholder='Kitap Açıklaması'></textarea>
      <input disabled={kitapAdi==="" || kitapYazari==="" || kitapSayfaSayisi===""||kitapAciklamasi==="" ||kitapKategorisi==="Kategori Seçiniz"} type='submit' value={secilenKitap?"Düzenle":"Ekle"} />
    </form>
  )
}

export default Forms