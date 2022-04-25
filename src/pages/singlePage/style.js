import styled from "styled-components";

export const Style = styled.div `
    .backColor{
        background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246));
        padding-top:100px;

            .lable{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;

                .topLable{
                    width: 100px;
                    height: 15px;
                    border-radius: 8px;
                    background: rgb(24,198,131);
                
                }
                .bottomLable{
                    background: rgb(24, 198, 131);
                    border-radius: 0px 0px 30px 5px;
                    padding:0 15px 8px 15px;
                    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
                    h1,h3{
                        text-align:center;
                        font-weight: 700;
                        color:white;
                    }
                }
            }
         
        //         .log-price-inner-right{
        //             display: flex;
        //             justify-content: space-between;
        //             align-items: baseline;
        //             span{
        //                 &:first-child{
        //                     padding-right:10px;
        //                 }
        //             }
        //         }
        //     }
        //     .ant-descriptions-item-content{
        //         display:flex;
        //         flex-direction:column;
        //         .inner-content-left-top{
        //             margin-bottom:20px;
        //             .title{
    
        //             }
        //             .content{
        //                 font-weight: 700;
        //                 font-size:18px;
        //             }
        //         }
        //         button{
        //             background: rgb(24, 198, 131);
        //             transition: transform 0.2s ease 0s;
        //             box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
        //             font-weight:600;
        //             border:none;
        //             &:hover{
        //                 transform: translateY(-2px);
        //             }
        //         }
        //     }
        //     .inner-content-middle-top{
        //         margin-bottom:20px;
        //         .title{
        //         }
        //         .content{
        //             font-weight: 700;
        //             font-size:18px;
        //         }
        //     }
        //     // button{
        //     //     transition: transform 0.2s ease 0s;
        //     //     box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
        //     //     background: rgb(24, 198, 131);
        //     //     font-weight:600;
        //     //     border:none;
                
        //     }
        //     .inner-content-right{
        //         .title{
        //         }
        //         .content{
        //             font-weight: 700;
        //             font-size:18px;
        //         }
        //     }
        // }  
    }
    }
`;
export const Container = styled.div `
max-width:80%;
margin: 0 auto ;
`;
export default Style;