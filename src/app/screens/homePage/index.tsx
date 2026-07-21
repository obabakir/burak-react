import React, { useEffect } from "react";

import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes /*setTestGroup*/ } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { ProductService } from "../../services/ProductService"; // or the correct path to ProductService
import { ProductCollection } from "../../../lib/enums/product.enum";

// REDUX SLICE & SELECTOR => Payloadinng definition:
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  /*
  eshmat: (data: Product[]) => dispatch(setTestGroup(data)),
  */
});
// 1 - setPopularDishes: staring/calling commandasi
// 2 - setPopularDishes: selector.ts dan kelayapti

/* const TestGroupRetriever = createSelector(
 retrieveTestGroup,
  (toshmat) => ({ toshmat }),
); */

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());

  /*
  const { eshmat } = useSelector(TestGroupRetriever);  
  */

  // Selector: Store => Date

  useEffect(() => {
    // Backend server data request => Date /// DATA FETCH
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        // console.log("data passed here:", data);
        setPopularDishes(data);
      })
      .catch((err) => console.log("Error:", err));
    /*
    const data: Product[] = [];
    */
    // Slice: Date => Store

    /* eshmat(data)*/
    // @ts-ignore
  }, []);

  /*console.log("toshmat selector", toshmat);*/

  // console.log("env ni boglaymiz:", process.env.REACT_APP_API_URL);

  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
