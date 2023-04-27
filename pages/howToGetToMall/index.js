import MicroBus from "./microBus/MicroBus"
import SecBus from "./secBus/SecBus"
import SecMain from "./secMain"
import CardSubscribe from "../homePage/secCardSubscribe/CardSubscribe"




const HowToGetToMall = () => {

    return(
        <div>  
            <SecMain/>
            {/* <FreeRoute/> */}
            <SecBus/>
            <MicroBus/>
            <CardSubscribe/>
        </div>
    )
}


export default HowToGetToMall