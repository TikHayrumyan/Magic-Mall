import Filter from "./secFilter/Filter"
import SecMain from "./SecMain"
import Select from "./Selectors/Select"
import CardSubscribe from "../homePage/secCardSubscribe/CardSubscribe"



const Entertainment = () => {

    return(
        <div>
            <SecMain/>
            <Select/>
            <Filter/>
            <CardSubscribe/>
        </div>
    )
}



export default Entertainment