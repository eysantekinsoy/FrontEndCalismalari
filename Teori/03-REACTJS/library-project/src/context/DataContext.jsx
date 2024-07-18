import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const companyName = "Tekinsoy";
  const{secilenKitap,kitaplar,kitapAdi,kitapYazari,kitapKategorisi,kitapSayfaSayisi,kitapResmi,kitapAciklamasi}=state

  const kitapEkle = async (yeni) => {
    let url = "http://localhost:3005/kitaplar";
    if (!secilenKitap) {
      //Kitap Ekleme Bölümü
      //Frontend ekleme işlemi
      // setKitaplar((prev) => [...prev, yeni]);
      //case_12
      yeni.id=(Number(kitaplar[kitaplar.length - 1].id) + 1).toString()
      dispatch({type:"kitapEkle",yeni})
      //Backend ekleme işlemi
      const response = await axios.post(url, yeni);
      // KitaplariGetir();
    } else {
      //Kitap Düzenleme Bölümü
      url += `/${secilenKitap.id}`;
      const response2 = await axios.put(url, yeni);
      
      // setKitaplar((prev) =>
      //   prev.map((kitap) => {
      //     if (kitap.id === secilenKitap.id) {
      //       return { ...response2.data };
      //     } else {
      //       return { ...kitap };
      //     }
      //   })
      // );
      // setSecilenKitap("");
      //case_15
      yeni.id=secilenKitap.id
      dispatch({type:"kitapDuzenle",yeni});
    }
  };
  const kitapSil = async (id) => {
    //Frontend silme işlemi
    // setKitaplar((prev) =>
    //   prev.filter((statedenGelen) => statedenGelen.id !== id)
    // );
    //case_13
    dispatch({type:"kitapSil",id})
    //Backend silme işlemi
    const url = `http://localhost:3005/kitaplar/${id}`;
    //const response= await axios.delete(url); !veriyi komple sildiği için tehlikelidir.
    const response = await axios.patch(url, { isDeleted: true });
  };

  const KitaplariGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    const response = await fetch(url);
    const kitaplar = await response.json();
    //setKitaplar(kitaplar);
    //case_1
    dispatch({type:"kitaplariGetir",payload:kitaplar})
  };

  const KategorileriGetir = async () => {
    const url = "http://localhost:3005/kategoriler";
    const response = await axios.get(url);
    const kategoriler = await response.data;
    //case_2
    dispatch({type:"kategorileriGetir",payload:kategoriler})
  };

  const cardDuzenle = (id) => {
    // setSecilenKitap(kitaplar.find((item) => item.id === id));
    //case_14
    dispatch({type:"cardDuzenle",id})

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    kitapEkle({

      kitapAdi: kitapAdi,
      kitapYazari: kitapYazari,
      kitapKategorisi: kitapKategorisi,
      kitapSayfaSayisi: kitapSayfaSayisi,
      kitapResmi: kitapResmi,
      kitapAciklamasi: kitapAciklamasi,
    });
    //case_3
    dispatch({type:"resetForm"})
  };

  useEffect(() => {
    KategorileriGetir();
    KitaplariGetir();
  }, []);

  // useEffect(() => {
  //   if (secilenKitap) {
  //     setKitapAdi(secilenKitap.kitapAdi);
  //     setKitapYazari(secilenKitap.kitapYazari);
  //     setKitapKategorisi(secilenKitap.kitapKategorisi);
  //     setKitapResmi(secilenKitap.kitapResmi);
  //     setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
  //     setKitapAciklamasi(secilenKitap.kitapAciklamasi);
  //   }
  // }, [secilenKitap]);

  return (
    <DataContext.Provider
      value={{
        companyName,
        handleSubmit, 
        kitapSil,
        cardDuzenle, 
        state,dispatch

      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
