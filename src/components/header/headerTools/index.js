import { Link } from "react-router-dom";
import { Button } from "antd";
import { SearchOutlined, SettingFilled } from "@ant-design/icons"
import Style from "./style.js";

export function HeaderTools(){
    return (
        <Style>
            <ul>
                <li><Link to= "/"><SearchOutlined/></Link></li>
                <li><Link to= "/"><SettingFilled /></Link></li>
                <li>
                    <Link to= "/">
                        <Button type="primary">Connect wallet</Button>
                    </Link>
                </li>
            </ul>
        </Style>
    )
}
export default HeaderTools;