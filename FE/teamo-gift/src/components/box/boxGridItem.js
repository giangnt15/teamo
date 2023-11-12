import { Link } from "react-router-dom";

function BoxGridItem({item}){
    return(<div className="box-grid-item">
            <Link className="box-grid-item-wrapper" to={item.id}>
                <div className="item-images">
                    {item.images.map((image, index)=><img key={index} src={image.url}/>)}
                </div>
                <p className="item-name">
                    {item.name}
                </p>
                <p className="item-price">
                    {item.price}
                </p>
            </Link>
    </div>)
}

export default BoxGridItem;