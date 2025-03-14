import { Link } from "react-router-dom"
import CompanyDisplay from "./CompanyDisplay"
import StatusDisplay from "./StatusDisplay"
import InterventionDateDisplay from "./InterventionDateDisplay"
import ProgressDisplay from "./ProgressDisplay"
import DeleteBlock from "./DeleteBlock"

const QuoteCard = ({ color, job }) => {
    return (
        <div className="quote-card"> 
                <Link to={`/quotes/${job.documentId}`} id="link">
                    <div className="job-color" style={{ backgroundColor: color }}></div>
                    <CompanyDisplay job={job}/>
                    <h4>{job.address}</h4>
                    <InterventionDateDisplay intervention_date={job.intervention_date}/>
                    <StatusDisplay status={job.status}/>
                    <ProgressDisplay progress={job.progress}/>
                </Link>
            <DeleteBlock/>
        </div>
    )
}

export default QuoteCard