import React from "react";
 import { createContext, useContext } from "react";
export const Themecontex = createContext({
    thememode : "light",
    darktheme : () => {},
    lighttheme : () => {}

})


export const Themeprovider =Themecontex.Provider




export default function useTheme(){
    return useContext(Themecontex)
}