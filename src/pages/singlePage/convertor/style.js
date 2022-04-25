import styled from "styled-components";

export const Style =styled.div`
    height: 400px;
    display:flex;
    justify-content:flex-end;
    width: 77%;
    margin: 0 auto;

    .swapTitle{
        display:flex;
        align-items:center;
        justify-content:space-between;
        h4{
            font-size: 20px;
            font-weight: 600;
        }
    }
    .boxes{
        border-radius: 20px;
        padding: 20px;
        border: .75px solid rgb(236, 239, 241);
        background: rgb(249, 249, 249);
        .boxTitle{
            font-weight: 600;
            color: rgba(0, 0, 0, 0.6);
            font-size:14px;
        }
        .boxValue{
            display:flex;
            p{
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.6);
                    font-size:20px;
                }                
            }
        }
    }
    .changer{
        img{
            margin: 16px 0px 16px 20px;
            max-width: 25px;
            display: block ;
            color: rgb(24, 198, 131);
            cursor: pointer;
        }
    }
    .jaDokme{
        display:flex;
        justify-content:center;
        button{

            transition: transform 0.2s ease 0s;
            box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
            background: rgb(24,198,131) !important;
            border-radius: 30px;
            border: none;
            font-weight: 700;
            color: white;
            width: 80%;
            padding: 15px;
            margin-top: 20px;
            font-size: 20px ;
        }
    }

`;
export const SmallContainer = styled.div `
max-width:30%;
margin: 0 0 0 0;

`;
export default Style;