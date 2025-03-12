import { Link } from "react-router-dom"
import CompanyEmailDisplay from "./CompanyEmailDisplay"
import CompanyNameDisplay from "./CompanyNameDisplay"
import ContactDisplay from "./ContactDisplay"
import CompanyTelDisplay from "./CompanyTelDisplay"
import DeleteBlock from "./DeleteBlock"

const CustomerCard = ({ color, customer }) => {
    return (
        <div className="customer-card"> 
                <Link to={`/customer/${customer.documentId}`} id="link">
                    <div className="customer-color" style={{ backgroundColor: color }}></div>
                    <CompanyNameDisplay customer={customer}/>
                    <h4>{customer.address}</h4>
                    <ContactDisplay contact={customer.contact}/>
                    <CompanyEmailDisplay email={customer.email}/>
                    <CompanyTelDisplay phone={customer.phone}/>
                </Link>
            <DeleteBlock/>
        </div>
    )
}

export default CustomerCard