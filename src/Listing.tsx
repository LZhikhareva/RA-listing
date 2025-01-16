import Item from "./Item";

type Nullable<T> = T | null;

export type EtsyItem = CommonEtsyItem & (ActiveEtsyItem | EtsyItemWithError);

type CommonEtsyItem = {
    listing_id: number
    sku: string[]
}

type EtsyItemWithError = {
    state: "removed"
    error_messages: string[]
}

type ActiveEtsyItem = {
    state: "active"
    user_id: number
    category_id: number
    title: string
    description: string
    creation_tsz: number
    ending_tsz: number
    original_creation_tsz: number
    last_modified_tsz: number
    price: string
    currency_code: string
    quantity: number
    tags: string[]
    category_path: string[]
    category_path_ids: number[]
    materials: string[]
    shop_section_id: number
    featured_rank: Nullable<number>
    state_tsz: number
    url: string
    views: number
    num_favorers: number
    shipping_template_id: number
    processing_min: number
    processing_max: number
    who_made: string
    is_supply: boolean
    when_made: string
    item_weight: Nullable<number>
    item_weight_unit: string
    item_length: Nullable<number>
    item_width: Nullable<number>
    item_height: Nullable<number>
    item_dimensions_unit: string
    is_private: boolean
    recipient: Nullable<string>
    occasion: Nullable<string>
    style: Nullable<string>
    non_taxable: boolean
    is_customizable: boolean
    is_digital: boolean
    file_data: string
    should_auto_renew: boolean
    language: string
    has_variations: boolean
    taxonomy_id: number
    taxonomy_path: string[]
    used_manufacturer: boolean
    MainImage: {
        listing_image_id: number
        hex_code: Nullable<number>
        red: Nullable<number>
        green: Nullable<number>
        blue: Nullable<number>
        hue: Nullable<number>
        saturation: Nullable<number>
        brightness: Nullable<number>
        is_black_and_white: Nullable<number>
        creation_tsz: Nullable<number>
        listing_id: number
        rank: Nullable<number>
        url_75x75: string
        url_170x135: string
        url_570xN: string
        url_fullxfull: string
        full_height: Nullable<number>
        full_width: Nullable<number>
    }
};

type ItemsList = EtsyItem[];

const Listing = ({ data }: { data: ItemsList }) => {
    return (
        <div className="item-list">
            {data.map((item: EtsyItem) => (
                <Item item={item} />
            ))}
        </div>
    )
}
export default Listing;