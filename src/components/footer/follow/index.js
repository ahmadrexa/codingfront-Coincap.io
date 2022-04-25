import { Link } from "react-router-dom";
import Style from "./style";
import { TwitterOutlined , FacebookFilled } from "@ant-design/icons";


export function Follow(){
    return(
        <Style>
            <p>FOLLOW US</p>
            <Link to="//twitter.com/CoinCap_io" target="_blank"><TwitterOutlined/></Link>
            <Link to="//facebook.com/coincapmarketdata/videos/365220420785166/" target="_blank"><FacebookFilled/></Link>
        </Style>
    )
}
export default Follow;