import type { Guitar } from "../types"
type GuitarProps = {
    item: Guitar, 
    addToCart : (item: Guitar) => void
}
export default function Guitar({item, addToCart} : GuitarProps ) {
    const { name, description, image, price} = item
    const formatQuantity = (quantity : number) => {
        return quantity.toLocaleString('en-US', {
         style: 'currency',
         currency: 'USD'
     })}

    return(
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <div className="col-4">
            <img className="img-fluid" src={`./img/${image}.jpg`} alt="imagen guitarra" />
        </div>
        <div className="col-8">
            <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
            <p>{description}</p>
            <p className="fw-black text-primary fs-3">{formatQuantity(price)}</p>
            <button 
                type="button"
                className="btn btn-dark w-100"
                onClick={() => addToCart(item)}
            >Agregar al Carrito</button>
        </div>
    </div>
    )
}