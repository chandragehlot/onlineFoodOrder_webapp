// Render out products list with search feature
import { WithSearch } from "../WithSearchHOC";
import { ProductsList } from "../ProductList";

const ProductsListWithSearch = WithSearch(ProductsList);

export default ProductsListWithSearch;