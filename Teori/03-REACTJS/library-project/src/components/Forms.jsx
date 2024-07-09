import React from 'react'
import '../assets/style/forms.scss'
const Forms = () => {
  return (
    <form>
      <h3>Kitap Ekle</h3>
      <input type="text" placeholder='Kitap Adı' />
      <input type="text" placeholder='Kitap Yazarı' />
      <select>
        <option>Kategorii Seçiniz</option>
        <option>Yazılım</option>
        <option>Tarih</option>
        <option>Roman</option>
        <option>Finans</option>
        <option>Diğer</option>
      </select>
      <input type="number" placeholder='Sayfa Sayısı' />
      <input type="url" placeholder='Kitap Resmi(URL)' />
      <textarea placeholder='Kitap Açıklaması'></textarea>
      <input type='submit' value="Ekle" />
    </form>
  )
}

export default Forms