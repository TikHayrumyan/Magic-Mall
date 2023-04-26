import MainHeader from "./headers/mainHeader/mainHeader"
import MenuHeader from "./headers/menuHeader/MenuHeader"


const Header = () => {
    return(
        <div className="MainHeadersDiv">
            <MainHeader/>
            <MenuHeader/>
        </div>
    )
}


export default Header