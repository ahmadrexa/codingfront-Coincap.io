import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../components/layout/defaultLayout";
import api from "../../utils/api";
import { Table, Space, Row, Col } from "antd";
import './style.css';
import styled  from "styled-components";


export const Container = styled.div `
max-width:80%;
margin: 0 auto ;
`;
export function Home(){
  const [loading, setLoading] = useState(false);
  const [assets, setAssets] = useState([]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const imgSrc1 = "https://assets.coincap.io/assets/icons/";
  const imgSrc2 = "@2x.png";
  const columnsObject = [
    {
      title:"Rank",
      dataIndex:"rank",
      key:"rank"
    },
    {
      title: 'Name',
      key: 'id',
      dataIndex: 'id',
      render: 
          function (text , item) {
              return (
                  <Space>
                  <img src={imgSrc1 + item.symbol.toLowerCase() + imgSrc2} />
                  <Link to={`/crypto/${text}`}>{text}<div>{item.symbol}</div></Link>
                  </Space>
              )
          },
    }, 
    {
      title:"Price",
      dataIndex:"priceUsd",
      key:"priceUsd",
      render: text => <p>${parseFloat(text).toFixed(2)}</p>
    },
    {
      title:"Market Cap",
      dataIndex:"marketCapUsd",
      key:"marketCapUsd",
      render: text => <p>{(Math.abs(Number(text)) / 1.0e+9).toFixed(2) + "b"}</p>
    },
    {
      title:"vwap24Hrp",
      dataIndex:"vwap24Hr",
      key:"vwap24Hr",
      render: text => <p>${parseFloat(text).toFixed(2)}</p>
    },
    {
      title:"supply",
      dataIndex:"supply",
      key:"supply",
      render: text => <p>{(Math.abs(Number(text)) / 1.0e+6).toFixed(2) + "m"}</p>
    },
    {
      title:"Volume(24Hr)",
      dataIndex:"volumeUsd24Hr",
      key:"volumeUsd24Hr	",
      render: text => <p>{(Math.abs(Number(text)) / 1.0e+9).toFixed(2) + "b"}</p>
    },
    {
      title:"Change(24Hr)",
      dataIndex:"changePercent24Hr",
      key:"changePercent24Hr",
      render: text => <p> {parseFloat(text).toFixed(2)}%</p>
    },

  ]
  useEffect(function(){
    async function getApi(){
      try{
        setLoading(true);
        const response = await api.get('assets', {limit: limit, offset: offset});
        console.log(response);
        setAssets(response.data.data);
        setLoading(false);
      }catch(e){
        setLoading(false);

      }
    }
    getApi();
  },[])
  function renderFarm(){
    return assets.map(function(item){
      return(
        <li key={item.id}><Link to={`/crypto/${item.id}`} >{item.id}</Link></li>
      )
    })
  
  }
  async function loadMore(){
    try{
      setOffset(offset+10)
      const response = await api.get("assets", {limit:limit , offset: offset+10})
      setAssets(assets.concat(response.data.data))

    }catch(e){

    }
  }
    return (
      <DefaultLayout>
        <div style= {{display: loading ? "block": "none"}}>loading</div>
        <div className="banner"></div>
        <Container>
            <div className="backBanner">
                                <Row justify="space-between">
                                    <Col>
                                        <Row justify="center"><div className="subject">MARCKET CAP</div></Row>
                                        <Row justify="center"><div className="number">$2.38T</div></Row>
                                    </Col>
                                    <Col>                                    
                                        <Row justify="center" ><div className="subject">EXCHANGE VOL</div></Row>
                                        <Row justify="center" ><div className="number">$83.16B</div></Row>                                    
                                    </Col>
                                    <Col>                                    
                                        <Row justify="center"><div className="subject">ASSTES</div></Row>
                                        <Row justify="center"><div className="number">2,295</div></Row>                                    
                                    </Col>
                                    <Col>
                                        <Row justify="center"><div className="subject">EXCHANGE</div></Row>
                                        <Row justify="center"><div className="number">73</div></Row>                                    
                                    </Col>
                                    <Col>
                                        <Row justify="center"><div className="subject">MARCKETS</div></Row>
                                        <Row justify="center"><div className="number">16,448</div></Row>                                    
                                    </Col>
                                    <Col>
                                        <Row justify="center"><div className="subject">BTC DOM INDEX</div></Row>
                                        <Row justify="center"><div className="number">32.9%</div></Row>
                                    </Col>
                                </Row>
                            </div>
          <Table pagination={false} columns={columnsObject} dataSource= {assets}/>
          <button className="dokme" onClick= {loadMore}>View More</button>
          </Container>
      </DefaultLayout>
    )
}
export default Home;