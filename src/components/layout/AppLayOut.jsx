import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";

const AppLayOut = () => {
  const navigation = useNavigation();
  if(navigation.state === "loading") return <Loading/>;
  return <>
   <Header/>
   <Outlet/>
   <Footer/>
  </>;
};

export default AppLayOut;
