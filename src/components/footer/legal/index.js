import { Row , Col } from "antd";
import { Link } from "react-router-dom";
import Style from "./style";


export function Legals(){
    return(
        <Style>
            <p>LEGALS</p> 
            <ul>
                <li><Link to="//assets.coincap.io/documents/terms_of_service.pdf" target="_blank">Terms of Service</Link></li>
                <li><Link to="//shapeshift.com/privacy?_ga=2.220280927.695211893.1646731752-630696419.1645293190" target="_blank">Privacy Policy</Link></li>
            </ul> 
            <p>DISCLAIMER</p>
            <span>
                Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.
            </span>
        </Style>
    )
}
export default Legals;