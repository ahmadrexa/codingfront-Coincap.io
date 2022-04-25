import { Row , Col }  from "antd";
import LinkList from "./linkList";
import Legals from "./legal";
import Follow from "./follow";
import AppCoin from "./appCoin";
import Style from "./style";
import { Container } from "./style"

export function Footer(){
    return(
        <Style>
            <Container>
                <Row justify="space-between">
                    <Col><LinkList/></Col>
                    <Col><Legals/></Col>
                    <Col><Follow/></Col> 
                    <Col><AppCoin/></Col>            
                </Row>
            </Container>
        </Style>
    )
}
export default Footer;
