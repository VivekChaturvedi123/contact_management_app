
import {Route,Routes} from "react-router-dom"
import Contacts from "./Contacts"
import Dashboard from "./Charts_and_Maps"
import EditContact from "../Components/Edit_Contact"
import ContactForm from "../Components/ContactForm"
const AllRoutes=()=>{


    return(
        <Routes >
            <Route path="/" element={<Contacts/>}/>
            <Route path="/contact_form" element={<ContactForm/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/edit/:id" element={<EditContact/>}/>
        </Routes>
    )
}

export default AllRoutes

/*the AllRoutes component uses the Route and Routes components from react-router-dom to define different routes for the application. The routes include paths for the contacts page (/), contact form page (/contact_form), dashboard page (/dashboard), and editing a contact page (/edit/:id). Each route is associated with a specific component that will be rendered when the corresponding URL is matched.
*/