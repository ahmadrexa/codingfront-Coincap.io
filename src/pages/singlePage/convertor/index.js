import { Select } from 'antd';
import { SettingFilled } from "@ant-design/icons"
import { useState, useEffect } from 'react';
import api from '../../../utils/api';
import { useParams } from "react-router-dom";
import Style, { SmallContainer} from './style';


export function Convertor(){

    const [assets, setAssets] = useState([]);
    const [items, setItems] = useState({});
    const {id} = useParams();
    const { Option } = Select;
    const imgSrc1 = "https://assets.coincap.io/assets/icons/";
    const imgSrc2 = "@2x.png";

    useEffect(function(){
        async function getApi(){
            try{
                const response = await api.get('assets');
                const responseId = await api.get(`assets/${id}`);
                setItems(responseId.data.data);
                setAssets(response.data.data);
            }catch(e){
            }
        }
        getApi();
    }, []);

    
    function renderFarm(){
        return assets.map(function(item){
            return(
                <Option 
                key={item.id}> <img src={imgSrc1 + item.symbol.toLowerCase() + imgSrc2} /> <p>{item.symbol}</p>
                </Option>
            )
        });
    }
    function selectCoins(){
    };
    return(
        <Style>
            <SmallContainer>
                <div className='swapTitle'>
                    <h4>Swap</h4>
                    <SettingFilled/>
                </div>
                <div className='boxes'>
                    <div className='boxTitle'>You Sell</div>
                    <div className='boxValue'>
                        <p>0</p>
                        <Select bordered={false} style={{ width: 200 }} >
                            {renderFarm()}
                        </Select>
                    </div>
                </div>
                {/* <div onClick={selectCoins()} className='changer'><img src='/images/shuffle-arrows-symbol-svgrepo-com.svg'/></div> */}
                <div className='boxes'>
                    <div className='boxTitle'>You Get</div>
                    <div className='boxValue'>
                        <p>0</p>
                        <Select bordered={false} style={{ width: 200 }} >
                            {renderFarm()}
                        </Select>
                    </div>
                </div>
                     <div className='jaDokme'>
                        <button>Connect Wallet</button>
                    </div>
             </SmallContainer>
        </Style>
    );
};
export default Convertor;