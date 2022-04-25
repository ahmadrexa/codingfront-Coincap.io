import styled from "styled-components";

export const Style = styled.div `
    p{
        font-size: 13px;
        font-weight: 700;
        padding : 0;
        color : white;
        margin-top: 5px;
    }
    a{
        color:white;
        opacity: 0.5;
        &:hover {
            color: white;
            opacity: unset;
        }
    }
    .anticon svg{
        width: 25PX;
        height: auto;
        &:nth-child(1){
            margin-right: 8px;
        }
    }
`;
export default Style;