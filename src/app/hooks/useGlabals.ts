import { Member } from "../../lib/types/member";
import { useContext, createContext } from "react";

interface GlobalInterface {
  authMember: Member | null;
  setAuthMember: (member: Member | null) => void;
}

export const GlobalContex = createContext<GlobalInterface | undefined>(
  undefined,
);

export const useGlobals = () => {
  const contex = useContext(GlobalContex);
  if (contex === undefined) throw new Error("useGlobals within Providers");
  return contex;
};
