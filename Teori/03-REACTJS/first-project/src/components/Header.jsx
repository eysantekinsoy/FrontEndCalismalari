//class Components
//rcc
// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (
//       <div>Header</div>
//     )
//   }
// }


//rce
// import React, { Component } from 'react'

// export class Header extends Component {
//   render() {
//     return (
//       <div>Header</div>
//     )
//   }
// }
// export default Header

//Functional Components
//rfc
// import React from 'react'

// export default function Header() {
//   return (
//     <div>Header</div>
//   )
// }


//rfce
// import React from 'react'

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header


//rafce
import React from 'react'
import Logo from '../assets/muffin.jpg'

const Header = () => {
    let header="Eysan Tekinsoy";
  return (
    <>
    <h3>Hello React, {header}</h3>
    <img src={Logo} alt="resim" width={200} />
    </>
  )
}

export default Header