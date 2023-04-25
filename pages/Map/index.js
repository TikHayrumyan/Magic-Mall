import Map from "../../components/Map/Map"
import SecMain from "../../components/Map/secMain"
import Select from "../../components/Map/Select/Select"
import CardSubscribe from "../homePage/secCardSubscribe/CardSubscribe"
import { useEffect, useState } from "react"
import axios from "axios"

const MapPage = () => {

  const [data,setData] = useState({data:{},loading:false})
  const [floorModal,SetFloorModal] = useState(false)
  const [changeFloor,SetChangeFloor] = useState(1)

  const GetMapData = async() => {
    try {
        const response = await axios({
            url: "http://apimall.weflex.am/api/map",
            method: "GET"
        })
        // console.log(response,"mapData");
        if(response.data && response.status == 200){
            setData({
                data:response.data,
                loading:true
            })
        }
    } catch (error) {
        console.log(error);
    }
  }
    useEffect(() => {
      GetMapData()
    },[])

  const setFloor = (num) => {
      SetChangeFloor(num == changeFloor ? num : num)
      SetFloorModal(false)
  }
  

    return(
        <div>
            <SecMain/>
            <Select data={data} setFloor={setFloor} changeFloor={changeFloor} floorModal={floorModal} SetFloorModal={SetFloorModal}/>
            <Map  data={data} changeFloor={changeFloor}/>
            <CardSubscribe/>
        </div>
    )
}

// export async function getStaticProps() {
    
    
//          const res = await fetch("http://apimall.weflex.am/api/map")
//          const data = await res.json()
    

//      return {
//        props: {
//          data,
//        },
//      }
//    }



export default MapPage

