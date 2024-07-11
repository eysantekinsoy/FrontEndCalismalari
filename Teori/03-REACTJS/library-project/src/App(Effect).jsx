import React, { useEffect, useState } from 'react'

const App = () => {
  const[sayac,setSayac]=useState(0);
  const[deger,setDeger]=useState(true);


  //1.Durum = Sayfa yüklendiğinde 1 defa çalışır.Sayfada gerçekleşen her değişiklikte tekrar tekrar tetiklenir.(default durum yani effect kullanılmadan yapılan işlemlerde böyle çalışırdı.)
  // useEffect(()=>{
  //   console.log("1.Durum useEffect Çalıştı!");
  // });

  //2.Durum =Sayfa yüklendiğinde 1 defa çalışır. Ancak bağımlılık dizisine hiç bir eleman tanımlanmadığı için değişikliğe bağlı olarak tekrar tetiklenmez.Yani sayfa yüklendiğinde sadece bir defa çalışır bir daha çalışmaz!
  // useEffect(()=>{
  //   console.log("2.Durum useEffect Çalıştı!");
  // },[]);

  //3.Durum =Sayfa yüklendiğinde 1 defa çalışır.Bağımlılık dizisi içerisine verilen elemanlar her değiştiğinde tekrar tetiklenir.
  // useEffect(()=>{
  //   console.log("3.Durum useEffect Çalıştı!");
  // },[sayac]);

  // useEffect(()=>{
  //   console.log("3.1.Durum useEffect Çalıştı!");
  // },[sayac,deger]);

    //4.Durum =Sayfa yüklendiğinde 1 defa çalışır.Cleanup metodu olarak örn:debouncing yapılarında kullanılır.
    useEffect(()=>{
      console.log("4.Durum useEffect Çalıştı!");
      return()=>{
        console.log("Clean-up metodu çalıştırıldı!!");
      }
    },[sayac]);


  


  return (
    <>
    <button onClick={()=>setSayac(sayac+1)}>Arttır</button>
    <span>{sayac}</span>
    <button onClick={()=>setSayac(sayac-1)}>Azalt</button>
    <br/>
    <br/>
    <button onClick={()=>setDeger(!deger)}>{deger?"True":"False"}</button>
    </>
  )
}

export default App