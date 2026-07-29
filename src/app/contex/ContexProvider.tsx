import React, { ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { Member } from "../../lib/types/member";
import { GlobalContex } from "../hooks/useGlabals";

const ContexProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cookies = new Cookies();
  //   cookies data => removed by timelimit => we remove = data in localStorage

  //   TODO:ertaga shu mantiqi tekshiramiz
  //   if (!cookies.get("accessToken")) localStorage.removeItem("memberData");

  const [authMember, setAuthMember] = useState<Member | null>(
    // making data reusable
    localStorage.getItem("memberData")
      ? JSON.parse(localStorage.getItem("memberData") as string)
      : null,
  );
  console.log("=== verify ===");

  return (
    <GlobalContex.Provider value={{ authMember, setAuthMember }}>
      {children}
    </GlobalContex.Provider>
  );
};

export default ContexProvider;
