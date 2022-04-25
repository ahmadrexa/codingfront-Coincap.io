import { Link } from "react-router-dom";
import "./style.js";
import styled from "styled-components";
import Style from "./style.js";

export function Menu(){
    return (
        <Style>
            <ul>
                <li><Link to= "/">Coins</Link></li>
                <li><Link to= "/">Exchange</Link></li>
                <li><Link to= "/">Swaps</Link></li>
            </ul>
        </Style>
    )
}
export default Menu;