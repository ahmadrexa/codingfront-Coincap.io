import styled from "styled-components";

export const Style = styled.div `
   ul{
       display:flex;
       align:middle;
       padding:0;
       margin:0;
       li {
           padding: 20px;
           Button{
            transition: transform 0.2s ease 0s;
            box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
            background: rgb(24, 198, 131) !important;
            border-radius:20px;
            border:none;
            font-weight: 700;
           }
        a {
            color:rgba(0,0,0,.87);
        }
       }
   }
`;
export default Style;