import OnlineRent from "./onlineRent/OnlineRent"
import PremisesRent from "./PremisesRent/PremisesRent"
import SecMain from "./secMain"
import CardSubscribe from "../homePage/CardSubscribe"




const ForRent = () => {

    return(
        <div>
            <SecMain/>
            <PremisesRent/>
            <OnlineRent/>
            <CardSubscribe/>
        </div>
    )
}



export default ForRent