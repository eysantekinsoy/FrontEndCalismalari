import React, { useEffect, useState } from 'react'
import Navi from './components/Navi'
import Forms from './components/Forms'
import CardList from './components/CardList'



const App = () => {
  const companyName="Tekinsoy";

  //const [stateAdi,stateMetodu]=useState(initialValue)
  const [kitaplar,setKitaplar]=useState([]);
  const [kategoriler,setKategoriler]=useState([]);
  const [secilenKategori,setSecilenKategori]=useState("Tüm Kitaplar");

  const kitapEkle=(yeni) =>{
    //setKitaplar([...kitaplar,yeni]);
    setKitaplar(prev=>[...prev,yeni]);
  }
  const kitapSil=(id)=>{
    //setKitaplar(kitaplar.filter(statedenGelen=>statedenGelen.id!==id))
    setKitaplar(prev=>prev.filter(statedenGelen=>statedenGelen.id!==id));
  }
  

  const KitaplariGetir=async()=>{
    const url="http://localhost:3000/kitaplar"
    const response=await fetch(url);
    const kitaplar=await response.json();
    setKitaplar(kitaplar);
  }

  useEffect(()=>{
    KitaplariGetir()

  },[])

  // KitaplariGetir();



  return (
    <>
    <Navi navHead={companyName} kategoriler={kategoriler} setSecilenKategori={setSecilenKategori}/>
    <Forms kitapEkle={kitapEkle} kitaplar={kitaplar}/>
    <CardList kitaplar={kitaplar} kitapSil={kitapSil} secilenKategori={secilenKategori}/>
    {companyName} 
    </>
  )
}

export default App