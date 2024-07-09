import React from 'react'
import Card from './Card'
 
const CardList = () => {
  const data = [
    {
      id:"1",
      kitapAdi:"Körlük",
      kitapYazari:"Jose Saramago",
      kitapKategorisi: "Roman",
      kitapSayfasi:320,
      kitapResmi:"https://img.kitapyurdu.com/v1/getImage/fn:11911357/wh:true/wi:220" ,
      kitapAciklamasi:"Usta yazarın belki de en etkileyici yapıtı olan, sinemaya da uyarlanmış Körlük, toplumsal yaşamın nasıl bir vahşete dönüşebileceğini müthiş bir incelikle gözler önüne sererken, insana dair son umut kırıntısını da bir kadının tek başına örgütlediği dayanışma ve direniş örneğiyle sergileyen unutulmaz eserler arasında yerini almıştır."
    },
    {
      id:"2",
      kitapAdi:"Şeker Portakalı",
      kitapYazari:"Jose Mauro De Vasconcelos",
      kitapKategorisi: "Roman",
      kitapSayfasi:320,
      kitapResmi:"https://img.kitapyurdu.com/v1/getImage/fn:11462950/wh:true/wi:220" ,
      kitapAciklamasi:"Beş yaşındaki Zezé hemen her şeyi tek başına öğrenir: sadece bilye oynamayı ve arabalara asılmayı değil, okumayı ve sokak şarkıcılarının ezgilerini de. En yakın sırdaşıysa, anlattıklarına kulak veren ve Minguinho adını verdiği bir şeker portakalı fidanıdır…"
    },
    {
      id:"3",
      kitapAdi: "Gecenin Anlamı",
      kitapYazari: "Michael Cox",
      kitapKategorisi: "Roman",
      kitapSayfaSayisi: 468,
      kitapResmi: "https://img.kitapyurdu.com/v1/getImage/fn:20333/wh:true/wi:220",
      kitapAciklamasi:"1854 yılı, soğuk bir Ekim gecesi. Karanlık bir geçitte masum bir adam bıçaklanarak öldürülür. Edward Glyver'ın olağanüstü öyküsü işte böyle başlıyor. Victoria dönemi Londrası'nın puslu sokaklarında, umumhanelerinde ve afyon batakhanelerinde geçen ihanet, vefasızlık, ölüm, vehim, saplantı ve hırs öyküsü…"
    },
    {
      id: "4",
      kitapAdi: "Faust",
      kitapYazari:"Johann Wolfgang von Goethe",
      kitapKategorisi:"Roman",
      kitapSayfaSayisi:575,
      kitapResmi:"https://cdn.bkmkitap.com/faust-tam-metin-13380814-12-O.jpg",
      kitapAciklamasi:"Faust kitabının genel anlamda konusu, insanı temsil eden Faust ile şeytanın savaşı anlatılmaktadır. Faust, hedefleri olan, hayatını bilime adayan bir karakterdir. Yaşamının büyük bir çoğunluğunu bilime harcarken oldukça şaşırtıcı bir sonuçla bir bunalıma sürüklenmiştir. Bu sırada, bir bilim insanı olarak gerekli araştırma ve öğrenme eylemlerinden  uzaklaştığını anlar. İkilemler arasında boğuşurken, şeytanla bir pazarlığa girmiştir."
    },
    {
      id: "5",
      kitapAdi: "Türklerin Tarihi",
      kitapYazari: "İlber Ortaylı ",
      kitapKategorisi: "Tarih",
      kitapSayfaSayisi: 272,
      kitapResmi : "https://img.kitapyurdu.com/v1/getImage/fn:11599115/wh:true/wi:220",
      kitapAciklamasi: "“Koca bir kavmin binlerce kilometreyi üç asır içinde geçtiğini düşünün… Bu, dünyayı değiştirmez de ne yapar? İşte Türkler dünyayı böyle değiştirdi. Bu sebeple, bizim hayalî bir tarih ve kahramanlar üretmeye değil, yalnızca doğruyu öğrenmeye ihtiyacımız var…”"
    }
  ]
  return (
    <div className='card-list'>
      {
        data.map(kitap=>
          <Card kitap={kitap} key={kitap.id}/>
        )
      }

    </div>
  )
}
 
export default CardList