import {Product} from './Product.jsx'

export function List(props) {

    return (
        <div className="card" style={{width: "18rem"}}>
    <img src={props.product.image} className="card-img-top" alt="..."/>
    <div className="card-body">
    <p className="card-text">{props.product.nom}</p>
      <Product group={props.product.nom}/> 
      <p className="card-text">{props.product.prix}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
        )
}