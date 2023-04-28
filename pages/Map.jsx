import Map from "../components/Map/Map"
import SecMain from "../components/Map/secMain"
import Select from "../components/Map/Select/Select"
import CardSubscribe from "./homePage/CardSubscribe"
import { useState } from "react"


const MapPage = ({data}) => {
    const [floorModal, SetFloorModal] = useState(false)
    const [changeFloor, SetChangeFloor] = useState(1)
    const setFloor = (num) => {
        SetChangeFloor(num == changeFloor ? num : num)
        SetFloorModal(false)
    }


    return (
        <div>
            <SecMain />
            <Select data={data} setFloor={setFloor} changeFloor={changeFloor} floorModal={floorModal} SetFloorModal={SetFloorModal} />
            <Map data={data} changeFloor={changeFloor} />
            <CardSubscribe />
        </div>
    )
}

export async function getStaticProps() {


    const mapFetch = await fetch("https://apimall.weflex.am/api/map")
    const map = await mapFetch.json()
    console.log('map: ', map);
    


    return {
        props: {
            data: {
                data: map,
                loading: true
            }
        },
    }
}



export default MapPage

