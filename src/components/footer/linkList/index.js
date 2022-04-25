import { Link } from "react-router-dom";
import Style from "./style";


export function LinkList(){
    return(
        <Style>
            <p>COINCAP.IO</p>
            <ul>
                <li><Link to="//coincap.io/methodology" target="_blank">Methodology</Link></li>
                <li><Link to="//shapeshift.zendesk.com/hc/en-us/requests/new" target="_blank">Support</Link></li>
                <li><Link to="//docs.coincap.io/" target="_blank">Our API</Link></li>
                <li><Link to="//coincap.io/rate-compare" target="_blank">Rate Comparison</Link></li>
                <li><Link to="//shapeshift.com/careers?_ga=2.245461059.695211893.1646731752-630696419.1645293190" target="_blank">Careers</Link></li>
            </ul>
        </Style>
    )
}
export default LinkList;