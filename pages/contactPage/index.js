import ContactUs from "./contactUs/ContactUs"
import SecContact from "./secContact/SecContact"
import SecMain from "./secMain"
import CardSubscribe from "../homePage/CardSubscribe"




const ContactPage = () => {


    return(
        <div>
            <SecMain/>
            <SecContact/>
            <ContactUs/>
            <CardSubscribe/>
        </div>
    )
}



export default ContactPage