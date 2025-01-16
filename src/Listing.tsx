import Item from "./Item";

const Listing = ({ data }) => {
    return (
        <div className="item-list">
            {data.map((item) => (
                <Item item={item} />
            ))}
        </div>
    )
}
export default Listing;