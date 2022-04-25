import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import DefaultLayout from "../../components/layout/defaultLayout";
import { Button, Descriptions} from 'antd';
import Style, { Container} from "./style";
import Convertor from "./convertor";

export function SinglePage(){
    const [item, setItem] = useState({});
    const {id} = useParams();
    useEffect(function(){
        async function getApi(){
            try{
                const response = await api.get(`assets/${id}`);
                setItem(response.data.data);
            }catch(e){

            }
        };
        getApi();
    }, [])
    function roundPrice(){
        return parseFloat(item.priceUsd).toFixed(2)
         
    };
    function roundChange(){
        return parseFloat(item.changePercent24Hr).toFixed(2)
       
    };
    function roundMarketCap(){
        return (Math.abs(Number(item.marketCapUsd)) / 1.0e+9).toFixed(2) + "b"
    };
    function roundVolume(){
        return (Math.abs(Number(item.volumeUsd24Hr)) / 1.0e+9).toFixed(2) + "b"
    };
    function roundSupply(){
        return (Math.abs(Number(item.supply)) / 1.0e+6).toFixed(2) + "m"
    };

    return(
        <DefaultLayout>
            
            <Style>
                <div className="backColor">
                    <Container>
                        <Descriptions layout="vertical" column={5}>
                            <Descriptions.Item >
                                <div className="lable">
                                    <span className="topLable"></span>
                                    <span className="bottomLable">
                                        <h1>{item.rank}</h1>
                                        <h3>Rank</h3>
                                    </span>
                                </div>
                            </Descriptions.Item>

                            <Descriptions.Item >
                                <div>
                                    <h1>{item.name}</h1>
                                    <h2>({item.symbol})</h2>
                                       <h2>${roundPrice()}</h2> <h2> {roundChange()}%</h2>    
                                    
                                </div>
                            </Descriptions.Item>

                            <Descriptions.Item >
                                <div>
                                    <h4>Market Cap</h4>
                                    <h2>${roundMarketCap()}</h2>
                                </div>
                                <Button type="primary" shape="round">Website</Button>
                            </Descriptions.Item>

                            <Descriptions.Item >
                                <div>
                                    <h4>Volume (24Hr)</h4>
                                    <h2>${roundVolume()}</h2>
                                </div>
                                <Button type="primary" shape="round">Explorer</Button>
                            </Descriptions.Item>

                            <Descriptions.Item >
                                <div>
                                    <h4>Supply</h4>
                                    <h2>{roundSupply()} {item.symbol}</h2>
                                </div>

                            </Descriptions.Item>
                        </Descriptions>
                    
                    </Container>    
                </div>
                
            </Style>
            <Convertor/>
        </DefaultLayout>
    )
};
export default SinglePage;