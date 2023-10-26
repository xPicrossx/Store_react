import { useEffect, useState } from 'react'
import './App.css'
// import {Cart} from  './components/Cart.jsx'
import {List} from './components/List.jsx'



function MyApp() {

  const [listProducts, setListProducts] = useState([])
 // usestate c'est la valeur de base, donc ici null
// listProducts c'est le nom de la constantte, qui vient toujours avec son seter derriere, comme on trvavaille avec les hooks
// Donc setListProducts est le setteur qu'on recupere en abs avec le fetch

useEffect(()=>{     //useEffect sert a dire que si un changement intervient dedans, il re rend le composant.
  fetch('https://api.npoint.io/68bf5db20a3c236f68ed')
.then((res)=>res.json())
.then(data => setListProducts(data))


}, [])


  return (
    <>
    {listProducts.map((product, index) => //map c'est une boucle, comme un foreach qui travaille sur une copie du tableau
    <List key={index} product= {product}/> 
    // le deuxieme product fait reference a celui du dessus, et le premier c'est le nom de la boite
   // CE SONT LES PROPS !! Qu'on va trasmettre dans List.jsx
    //index il comprend direct
    //toutes les infos qu'on fait passer dans product, on les retrouve dans Props (de l'autre cote, dans product.jsx)
    //Tu fais passer quelque chose, props est rempli !! C'est comme ça !    
    
    )}

  <Cart key={index} product= {product}/>

    </>
    )}

export default MyApp
