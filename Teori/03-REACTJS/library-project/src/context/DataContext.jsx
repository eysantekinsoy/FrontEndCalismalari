import axios from "axios";
import { createContext, useEffect, useState } from "react";


//Context oluşturulması
const DataContext = createContext();

//oluşturulan context için bir sağlayıcı oluşturulur.
export const DataProvider = ({children})=>{

 //yapıdaki tüm state,metod,..etc. buraya taşınacak.
    const companyName="Tekinsoy";

    const [kitaplar,setKitaplar]=useState([]);
    const [kategoriler,setKategoriler]=useState([]);
    const [secilenKategori,setSecilenKategori]=useState("Tüm Kitaplar");
    const [secilenKitap,setSecilenKitap]=useState("");
    const[kitapAdi,setKitapAdi]=useState("");
    const[kitapYazari,setKitapYazari]=useState("");
    const[kitapKategorisi,setKitapKategorisi]=useState("Kategori seçiniz");
    const[kitapSayfaSayisi,setKitapSayfaSayisi]=useState("");
    const[kitapResmi,setKitapResmi]=useState("");
    const[kitapAciklamasi,setKitapAciklamasi]=useState("");
    const[search, setSearch]=useState("");
  
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
      setKitaplar(prev=>prev.filter(statedenGelen=>statedenGelen.id!==id));
      //Backend silme işlemi
      const url=`http://localhost:3005/kitaplar/${id}`
      //const response= await axios.delete(url); !veriyi komple sildiği için tehlikelidir.
      const response=await axios.patch(url,{isDeleted:true});
  
  
    }
    
    const KitaplariGetir=async()=>{
        let url="http://localhost:3005/kitaplar";
        const response=await fetch(url);
        const kitaplar=await response.json();
        setKitaplar(kitaplar);
      } 
  
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

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log("lorem lorem lorem lorem");
        kitapEkle({
          id:(Number(kitaplar[kitaplar.length-1].id)+1).toString(),
          kitapAdi:kitapAdi,
          kitapYazari:kitapYazari,
          kitapKategorisi:kitapKategorisi,
          kitapSayfaSayisi:kitapSayfaSayisi,
          kitapResmi:kitapResmi,
          kitapAciklamasi:kitapAciklamasi
        });
        setKitapAdi("");
        setKitapYazari("");
        setKitapKategorisi("Kategori Seçiniz");
        setKitapResmi("");
        setKitapSayfaSayisi("");
        setKitapAciklamasi("");
      }
    
  
    useEffect(()=>{
      KategorileriGetir();
      KitaplariGetir();
    },[])

    useEffect(()=>{
      if(secilenKitap){
        setKitapAdi(secilenKitap.kitapAdi);
        setKitapYazari(secilenKitap.kitapYazari);
        setKitapKategorisi(secilenKitap.kitapKategorisi);
        setKitapResmi(secilenKitap.kitapResmi);
        setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
        setKitapAciklamasi(secilenKitap.kitapAciklamasi);  
      }
    },[secilenKitap])


    return <DataContext.Provider value={{
        companyName,kategoriler,setSecilenKategori, //Navi componentinden gelenler
        secilenKitap, //Forms componentinden gelenler
        kitapAdi,
        kitapYazari,
        kitapKategorisi,
        kitapResmi,
        kitapSayfaSayisi,
        kitapAciklamasi,
        setKitapAdi,
        setKitapYazari,
        setKitapKategorisi,
        setKitapResmi,
        setKitapSayfaSayisi,
        setKitapAciklamasi,
        handleSubmit, //Forms componentinden gelenler
        kitaplar,secilenKategori, //CardList componentinden gelenler
        kitapSil,cardDuzenle, //Card componentinden gelenler
        search,setSearch
    }}>
        {children}
    </DataContext.Provider>
}

export default DataContext;