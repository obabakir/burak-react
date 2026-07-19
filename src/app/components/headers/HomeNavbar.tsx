import { Box, Button, Container, Stack } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, {
  useEffect,
  useState,
  useCallback,
  useContext,
  useRef,
} from "react";

export default function HomeNavbar() {
  const authMember = null;

  const [count, setCount] = useState<number>(0);
  // count ni boshlanish qiymati 0 (1000 desak ham bolaveradi)ga teng // setCount bu huddi uni ishga tushuradigan function yani ozgaruvchi
  const [value, setValue] = useState<boolean>(true);
  // value = boolean = true // setValue function

  // useEffect === componentDidMount //componentWillUnmount // componentDidUpdate majburiy qismlari
  useEffect(
    () => {
      console.log(" +++ componentDidMount", count);
      setCount(
        count + 1,
      ); /** componentDidMoun   va aftamatic birinchi ishga tushganda  1 qiymatni beradi**/

      return () => {
        console.log("+++ componentWillUnmount");
      };
    } /** componentWillUnmount jarayoni un**/,
    [value] /** array dependency <--> componentDidUpdate**/,
  );

  // useEffect () --> bu callback va [] --> errey dependancy dan tashkilntopadi
  //  useEffect 1 marta ishga tushadi va agar biz uni qayta ishga tushurmoqchi bolsak u holda  [] ni ichiga qiymat berib uni ozgartirishimiz kere ==> va biz buni const value ~ ~ true korinishida. berib va  buttonHandler ichidagi functionni qiymati not true yani << setValue(!value) >> ga tenglading va qachonki biz buttonHandlerni ishga tushursak useEffect ishga tushaveradi va uning ichidagi malumot setCount(count + 1); /** componentDidMoun**/ ishga tushaveradi

  /** HANDLERS ==> codni soddalashtirish un yasadik **/

  const buttonHandler = () => {
    setValue(!value);
  };
  // ===>>> function buttonHandler(){ setValue(!value); //  setCount(count + 100);}
  //

  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img
                className="brand-logo"
                src="/icons/burak.svg"
                alt="rasm bor"
              />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                {" "}
                Home{" "}
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName={"underline"}>
                {" "}
                Products{" "}
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders"> Orders </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  {" "}
                  My Page{" "}
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
                {" "}
                Help{" "}
              </NavLink>
            </Box>
            {/* Basket.txs fileni chaqirdik */}
            <Basket />
            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button">
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src="/icons/default-user.svg"
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>
        <Stack className="header-frame">
          <Stack className="detail">
            <Box className="head-main-txt">World's Most Delicious Cousine</Box>
            <Box className="wel-txt">The Choice not just a choice</Box>
            <Box className="service-txt">{count} hours service</Box>
            <Box className="signup">
              {!authMember ? (
                <Button
                  variant={"contained"}
                  className={"signup-button"}
                  onClick={buttonHandler}
                  /* onClick = { () => setCount(count + 1)}*/
                  /* onClick = {() => buttonHandler()}*/
                >
                  SIGN UP
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Box className="logo-frame">
            <div className="logo-img"></div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
