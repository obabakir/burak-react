import { Box, Button, Container, Stack } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export function HomeNavbar() {
  const authMember = null;
  return (
    <div className="home-navbar">
      <Container sx={{ mt: "55px", height: "642px" }}>
        <Stack
          sx={{
            height: "50px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <NavLink to="/">
              <img
                style={{ width: "125px", height: "30px" }}
                src="/icons/burak.svg"
                alt="rasm bor"
              />
            </NavLink>
          </Box>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              minWidth: "700px",
              alignItems: "center",
            }}
          >
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                {" "}
                Home{" "}
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName={"underline"}>
                {" "}
                Productspage{" "}
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
                HelpPage{" "}
              </NavLink>
            </Box>
            {/*Basket*/}
            {!authMember ? (
              <Box>
                <Button
                  variant="contained"
                  style={{ background: "#3776CC", color: "#f8f8ff" }}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img />
            )}
          </Stack>
        </Stack>
        <Stack>Details</Stack>
      </Container>
    </div>
  );
}
