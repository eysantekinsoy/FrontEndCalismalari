import React from 'react'

const Main = () => {
    
  return (
    <>
    <h4>JSX Özellikleri</h4>
    <ol>
      <li>Componentin return ü içerisindeki html benzeri yapı (jsx) mutlaka fragment (bir kapsayıcı) içerisinde yazılmalıdır.</li>
      <li>JSX Yapısı içerisinde süslü parantez {'{JS Kodu}'}içerisine JS Kodları yazılmasına olanak tanır.2+4={2+4}</li>
      <li style={{color:"red",fontSize:"20px"}}>JSX İçerisinde inline css yazmak için çift süslü parantez kullanılır. {'style={{JS olarak css kodu}}'}</li>
    </ol>
    </>
  )
}

export default Main