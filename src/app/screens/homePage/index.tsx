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

// REDUX SLICE & SELECTOR => Payloadinng definition:
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  /*
  eshmat: (data: Product[]) => dispatch(setTestGroup(data)),
  */
});
// 1 - setPopularDishes: staring/calling commandasi
// 2 - setPopularDishes: selector.ts dan kelayapti

const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes }),
);

/* const TestGroupRetriever = createSelector(
 retrieveTestGroup,
  (toshmat) => ({ toshmat }),
); */

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);

  /*
  const { eshmat } = useSelector(TestGroupRetriever);  
  */

  // Selector: Store => Date

  useEffect(() => {
    // Backend server data request => Date /// DATA FETCH
    const result = [
      {
        _id: "6a363d42842e88178ec145f4",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Burger6",
        productPrice: 7,
        productLeftCount: 50,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "burger56",
        productImages: [
          "uploads/products/c36f5f3c-bc16-4ad1-99a8-95bcef2f9548.jpg",
        ],
        productViews: 0,
        createdAt: "2026-06-20T07:12:02.668Z",
        updatedAt: "2026-06-20T07:12:02.668Z",
        __v: 0,
      },
      {
        _id: "6a363821605054b88d4cde8a",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Burgercha",
        productPrice: 11,
        productLeftCount: 11,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "burgercha",
        productImages: [
          "uploads/products/05da2f5e-766b-412e-a443-fe677a4c6f4f.png",
        ],
        productViews: 0,
        createdAt: "2026-06-20T06:50:09.427Z",
        updatedAt: "2026-06-21T00:18:39.410Z",
        __v: 0,
      },
      {
        _id: "6a3637e4605054b88d4cde87",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Lavash",
        productPrice: 13,
        productLeftCount: 22,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "Lavash",
        productImages: [
          "uploads/products/519ce557-e0a5-44de-8e04-9bdf73055564.png",
        ],
        productViews: 0,
        createdAt: "2026-06-20T06:49:08.346Z",
        updatedAt: "2026-06-21T00:12:08.070Z",
        __v: 0,
      },
    ];

    /*
    const data: Product[] = [];
    */
    // Slice: Date => Store

    /* eshmat(data)*/
    // @ts-ignore
    setPopularDishes(result);
  }, []);

  console.log("popularDishes => :", popularDishes);
  /*console.log("toshmat selector", toshmat);*/

  console.log("env ni boglaymiz:", process.env.REACT_APP_API_URL);

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
