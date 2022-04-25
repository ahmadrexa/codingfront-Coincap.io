import styled from "styled-components";

export const Style = styled.div `
    ul{
        padding-left: 0;
        li{
            a{
                color:white;
                font-size:12px;
                 font-weight:600;
                opacity: 0.5;
                &:hover {
                    color: white;
                    opacity: unset;
                }
            }
        }
    }
    p{
        font-size: 13px;
        font-weight: 700;
        padding : 0;
        color : white;
        margin-top: 5px;
    }
    span{
        font-size:12px;
        font-weight:600;
        color:white;
        opacity: 0.5; 
    }
`;
export default Style;