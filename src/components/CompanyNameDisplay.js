const CompanyNameDisplay = ({ customer }) => {
    return (
        <div className="company-container">
            <div className="company-details">
                <h3>{customer.company} </h3>
            </div>

        </div>
    )
}

export default CompanyNameDisplay