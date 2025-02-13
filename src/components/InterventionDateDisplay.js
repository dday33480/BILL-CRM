const InterventionDateDisplay = ({ intervention_date }) => {
    return (
        <div className="intervention-display">
            <div className="intervention-container">
                <p>Intervention pour le : <h4>{intervention_date}</h4></p>
            </div>
        </div>
    )
}

export default InterventionDateDisplay