/* REACT APP STATE*/

import { Member } from "./member";
import { Product } from "./product";

export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
  // ordersPage: OrdersPageState;
}

/** HOMEPAGE**/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
  /*testGroup: string;*/
}

/** PRODUCTSPAGE **/
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/** ORDERSPAGE **/
// export interface OrdersPageState {

// }
