import CustomerCard from '../components/CustomerCard'
import { useNavigate } from 'react-router-dom'

const CustomerPage = () => {

    const navigate = useNavigate()

    const customers = [
        {
            company: "La Poste",
            address: "1 Rue du Test, 33000 Bordeaux",
            contact: "Jean Dupont",
            phone: "06 12 34 56 78",
            email: "jean.dupont@laposte.fr"
        },
        {
            company: "Dassault",
            address: "110 Rue Marcel Dassault, 33340 Mérignac",
            contact: "Marcel Dassault",
            phone: "06 12 34 56 78",
            email: "m.dassault@dassaultsystems.fr"
        }
    ]

    const colors = [
        'rgb(255, 179, 186)',
        'rgb(255, 223, 186)',
        'rgb(255, 255, 186)',
        'rgb(186, 255, 201)',
        'rgb(186, 255, 255)'
    ]

    return (
        <div className="customers">
            <h1>Clients</h1>
            <button className="create-customer" onClick={ () => navigate("/customers/create") }>
                Ajouter un nouveau client
            </button>
            <div className="customer-container">
                {customers.map((filteredcustomer, _index) => (
                    <div key={_index}>
                        <CustomerCard
                        id={_index}
                        color={colors[_index] || colors[0]}
                        customer={filteredcustomer}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomerPage