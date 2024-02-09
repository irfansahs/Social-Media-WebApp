import { createContext ,useContext} from "react";

const MainContext = createContext<any>(undefined);

export {
    MainContext,
    useContext
}