import { createContext, useState } from "react";


const AppContext= createContext('light');

export const ContextProvider=({children})=>{

    const [userInput, setUserInput]=useState(0);
    const [guessList, setGuessList]=useState([]);
    

    return (
        <AppContext.Provider value={{userInput,setGuessList,setUserInput,guessList}}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContext;