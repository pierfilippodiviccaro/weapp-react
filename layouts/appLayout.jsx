import {Outlet} from "react-router"
import Header from "../src/components/header"

export default function AppLayout({nomeApp}){
return(
    <>
    <Header nomeApp={nomeApp}/>
    <Outlet/>
    </>
)

}