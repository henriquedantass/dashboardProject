import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface SideBarDrawerContextProps {
  children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData );

export function SideBarDrawerProvider ({children}: SideBarDrawerContextProps){

  const disclosure = useDisclosure()

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}


export const useSideBarDrawer = () => useContext(SideBarDrawerContext)