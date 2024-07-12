import React, { useEffect, useState } from 'react'
import Navi from './components/Navi'
import Forms from './components/Forms'
import CardList from './components/CardList'
import axios from 'axios'

const App = () => {
  const companyName="Tekinsoy";

  //const [stateAdi,stateMetodu]=useState(initialValue)
  const [kitaplar,setKitaplar]=useState([]);
  const [kategoriler,setKategoriler]=useState([]);
  const [secilenKategori,setSecilenKategori]=useState("Tüm Kitaplar");
  const [secilenKitap,setSecilenKitap]=useState("");

  const kitapEkle=async (yeni) =>{
    let url="http://localhost:3005/kitaplar";
    if(!secilenKitap){ //Kitap Ekleme Bölümü
      //Frontend ekleme işlemi
      setKitaplar(prev=>[...prev,yeni]);
      //Backend ekleme işlemi
      const response=await axios.post(url,yeni);
      KitaplariGetir();

    }
    else{ //Kitap Düzenleme Bölümü
      url+=`/${secilenKitap.id}`;
      const response2=await axios.put(url,yeni);
      setKitaplar(prev=>
        prev.map(kitap=>{
          if(kitap.id === secilenKitap.id){
            return {...response2.data}
          }
          else{
            return {...kitap}
          }
        })
      )
      setSecilenKitap("");
    }
  }
  const kitapSil=async(id)=>{
    //setKitaplar(kitaplar.filter(statedenGelen=>statedenGelen.id!==id))
    //Frontend silme işlemi
    //setKitaplar(prev=>prev.filter(statedenGelen=>statedenGelen.id!==id));
    //Backend silme işlemi
    const url=`http://localhost:3005/kitaplar/${id}`
    //const response= await axios.delete(url); !veriyi komple sildiği için tehlikelidir.
    const response=await axios.patch(url,{isDeleted:true});


  }
  
  const KitaplariGetir=async()=>{
    if(secilenKategori==="Tüm Kitaplar"){
      let url="http://localhost:3005/kitaplar";
      const response=await fetch(url);
      const kitaplar=await response.json();
      setKitaplar(kitaplar);
    }
    else{
      const filtredLib = kitaplar.filter(kitap=>kitap.kitapKategorisi===secilenKategori);
      setKitaplar(filtredLib);

    }
  }

  // const KitaplariGetir=async()=>{
  //   let url="http://localhost:3005/kitaplar";
  //   if(secilenKategori && secilenKategori!=="Tüm Kitaplar"){
  //     url+=`?kitapKategorisi=${secilenKategori}`
  //   }
  //   const response=await fetch(url);
  //   const kitaplar=await response.json();
  //   setKitaplar(kitaplar);
  // }

  const KategorileriGetir=async()=>{
    const url="http://localhost:3005/kategoriler"
    const response=await axios.get(url);
    const kategoriler=await response.data;

    setKategoriler(kategoriler);
  }

  const cardDuzenle=(id)=>{
    setSecilenKitap(kitaplar.find(item=>item.id===id));
    console.log(kitaplar.find(item=>item.id===id));

  }

  useEffect(()=>{
    KategorileriGetir();

  },[])
  useEffect(()=>{
    KitaplariGetir();
  },[secilenKategori])
  // KitaplariGetir();

  return (
    <>
    <Navi navHead={companyName} kategoriler={kategoriler} setSecilenKategori={setSecilenKategori}/>
    <Forms secilenKitap={secilenKitap} kitapEkle={kitapEkle} kitaplar={kitaplar}/>
    <CardList kitaplar={kitaplar} kitapSil={kitapSil} secilenKategori={secilenKategori} cardDuzenle={cardDuzenle}/>
    {companyName} 
    </>
  )
}

export default App