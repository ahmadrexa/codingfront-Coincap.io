import { Fragment } from "react";
import Header from "../../header";
import Footer from "../../footer"



export function DefaultLayout(props){
    const {children} = props; 
    return (
        <Fragment>
           
                <Header/>
                    {children}
                <Footer/>
            
        </Fragment>
    )
}
export default DefaultLayout;