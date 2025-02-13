import JobCard from '../components/JobCard'
import { useNavigate } from 'react-router-dom'

const JobPage = () => {

    const navigate = useNavigate()

    const jobs = [
        {
            category: "INTERVENTION",
            color: "red",
            address: "1 Rue du Test, 33000 Bordeaux",
            company: "La Poste",
            status: "Done",
            intervention_date: "05/03/2025",
            progress: 40,
            description: "This is a description of job 1",
            timestamp: "2022-03-12T08:22:15+0000"
        },
        {
            category: "INTERVENTION",
            color: "red",
            address: "110 Rue Marcel Dassault, 33340 Mérignac",
            company: "Dassault",
            status: "Done",
            intervention_date: "21/06/2025",
            progress: 10,
            description: "This is a description of job 2",
            timestamp: "2022-03-19T11:42:33+0000"
        },
        {
            category: "DEVIS",
            color: "red",
            address: "101 Avenue de la République, 33000 Bordeaux",
            company: "Region Aquitaine",
            status: "In Progress",
            intervention_date: "06/05/2025",
            progress: 22,
            description: "This is a description of David's new job",
            timestamp: "2022-06-03T16:01:51+0000"
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
        <div className="jobs">
            <h1>Mes Interventions</h1>
            <button className="create-job" onClick={ () => navigate("/jobs/create") }>
                Créer une Intervention
            </button>
            <div className="job-container">
                {jobs.filter((job) => job.category !== "DEVIS")
                .map((filteredJob, _index) => (
                    <div key={_index}>
                        <JobCard
                        id={_index}
                        color={colors[_index] || colors[0]}
                        job={filteredJob}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobPage