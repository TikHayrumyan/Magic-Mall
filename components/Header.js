import MainHeader from "./Headers/mainHeader/mainHeader"
import MenuHeader from "./Headers/menuHeader/MenuHeader"


const Header = () => {
    return(
        <div className="MainHeadersDiv">
            <MainHeader/>
            <MenuHeader/>
        </div>
    )
}


export default Header