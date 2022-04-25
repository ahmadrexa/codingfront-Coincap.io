import { Link } from "react-router-dom";
import Style from "./style";

export function AppCoin(){
    return(
        <Style>
           <p>COINCAP APP AVAILABLE ON</p>
           <Link  to="//play.google.com/store/apps/details?id=io.coinCap.coinCap" target="_blank">
               <img src= "https://icon-library.com/images/play-store-download-icon/play-store-download-icon-22.jpg"/>
           </Link>
           <Link to= "//itunes.apple.com/us/app/coincap/id1074052280?mt=8&ign-mpt=uo%3D4>" target="_blank">
               <img src= "https://syndication.inc.hp.com/inpage/content/showcase/ga/en/uploads/images/neverstop-laser-apple-store.svg"/>
           </Link>
        </Style>
    )
}
export default AppCoin;