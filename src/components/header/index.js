import { Fragment } from "react";
import HeaderTools from "./headerTools";
import Logo from "./Logo";
import Menu from "./menu";
import { Row, Col } from "antd"
import Style, { Container } from "./style";


export function Header(){
    return (
        <Style>
           <Container>
            <Row justify="space-between">
                <Col><Menu/></Col>
                <Col><Logo/></Col>
                <Col><HeaderTools/></Col>
            </Row>
            </Container>
        </Style>
    )
}
export default Header;