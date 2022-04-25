import styled from "styled-components";
const Style = styled.div `
        ul{
            display:flex;
            padding:0;
            margin:0;
            li {
                a {
                    display:block;
                    padding: 20px;
                    font-size: 14px;
                    color: rgba(0,0,0,.87);
                    &:hover{
                        background:rgba(0,0,0,.03);
                        color: rgba(0,0,0,.95)
                    }
                }
            }
        }
`;
export default Style;