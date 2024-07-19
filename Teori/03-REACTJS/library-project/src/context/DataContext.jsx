import axios from "axios";
import { createContext, useEffect, useReducer} from "react";
import { initialState, reducer } from "../reducer/reducer";
import { Flip, toast } from "react-toastify";



const DataContext = createContext();


export const DataProvider = ({children})=>{

  const [state,dispatch] = useReducer(reducer,initialState);

  const companyName = "ANK-16";
  const{secilenKitap,kitaplar,kitapAdi,kitapYazari,kitapKategorisi,kitapSayfaSayisi,kitapResmi,kitapAciklamasi}=state
  

  const kitapEkle = async (yeni) => {
    let url = "http://localhost:3005/kitaplar";
    if(!secilenKitap){ // Kitap Ekleme Bölümü
      //Frontend ekleme işlemi
      //case_12
      yeni.id = (Number(kitaplar[kitaplar.length-1].id)+1).toString()
      dispatch({type:"kitapEkle",yeni})
      //toastMessage
      toast.success('Yeni Kitap Eklendi!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        });
      //Backend ekleme işlemi
      const response = await axios.post(url,yeni);
    }
    else{//Kitap Düzenleme bölümü
      url+=`/${secilenKitap.id}`;
      const response2 = await axios.put(url,yeni);
      //case_15
      yeni.id = secilenKitap.id
      dispatch({type:"kitapDuzenle",yeni});
      //toastMessage
      toast.warn('Kitap Düzenlendi!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        });
    }
  }

  const kitapSil = async (id) => {
    //Frontend silme işlemi
    //case_13
    dispatch({type:"kitapSil",id})
    //toastMessage
    toast.error('Kitap Silindi!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
      });
    //Backend silme işlemi
    const url = `http://localhost:3005/kitaplar/${id}`
    const response = await axios.patch(url,{isDeleted: true});
  }

  const kitaplariGetir = async () => {
      let url = "http://localhost:3005/kitaplar";
      const response = await fetch(url);
      const kitaplar = await response.json();
      //case_1
      dispatch({type:"kitaplariGetir",payload:kitaplar})
  }

  const kategorileriGetir = async () => {
    const url = "http://localhost:3005/kategoriler";
    const response = await axios.get(url);
    const kategoriler = await response.data;
    //case_2
    dispatch({type:"kategorileriGetir",payload:kategoriler})
  }

  const cardDuzenle = (id)=>{
      //case_14
      dispatch({type:"cardDuzenle",id})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    kitapEkle({
      kitapAdi: kitapAdi,
      kitapYazari: kitapYazari,
      kitapKategorisi: kitapKategorisi,
      kitapSayfaSayisi: kitapSayfaSayisi,
      kitapResmi: kitapResmi,
      kitapAciklamasi: kitapAciklamasi
    });
    //case_3
    dispatch({type:"resetForm"})

  }

useEffect(()=>{
    kategorileriGetir();
    kitaplariGetir();
  },[])

  // useEffect(()=>{
  //   if(secilenKitap){
  //     setKitapAdi(secilenKitap.kitapAdi);
  //     setKitapYazari(secilenKitap.kitapYazari);
  //     setKitapKategorisi(secilenKitap.kitapKategorisi);
  //     setKitapResmi(secilenKitap.kitapResmi);
  //     setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
  //     setKitapAciklamasi(secilenKitap.kitapAciklamasi);
  //   }
  // },[secilenKitap])



    return <DataContext.Provider value={{
        companyName,
        handleSubmit,
        kitapSil,cardDuzenle,
        state,dispatch
    }}>
                {children}
           </DataContext.Provider>
}


export default DataContext;