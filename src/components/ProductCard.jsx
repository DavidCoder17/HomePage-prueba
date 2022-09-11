
export const ProductCard = ({img, title, price}) => {

    return (
        <a href="#" className='productCard' >

            <img className="img" src={img} alt={title} />

            <h2 className="title">{title}</h2>
            <p className="price">{price}</p>
            
        </a>
    )
}
