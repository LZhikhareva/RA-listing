import { EtsyItem } from "./Listing";

const Item = ({ item }: { item: EtsyItem }) => {
    if ('title' in item) {
        return (
            <div className="item">
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage?.url_570xN} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{item.title && item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</p>
                    <p className="item-price">{item.currency_code === 'USD' ? '$' + item.price : item.currency_code === 'EUR' ? '€' + item.price : item.price + ' ' + item.currency_code}</p>
                    <p className={`item-quantity ${item.quantity <= 10 ? 'level-low' : item.quantity <= 20 ? 'level-medium' : 'level-high'}`}>{item.quantity} left</p>
                </div>
            </div>
        )
    } else {
        return null;
    }
}
export default Item;
