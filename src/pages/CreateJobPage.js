import { useState } from "react"

const CreateJobPage = () => {

    const [formData, setFormData] = useState({
        status: "not started",
        progress: 0,
        timestamp: new Date().toISOString()
    })

    const editMode = false

    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
            })
        )
    }

    console.log(formData)

    return (
        <div className="job-creation">
            <h1>{editMode ? 'Update your Job' : 'Create a Job'}</h1>
            <div className="job-creation-container">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="title">Entreprise</label>
                        <input
                            id="title"
                            name ="title" 
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.title}
                        />

                        <label htmlFor="contact">Nom du Contact</label>
                        <input
                            id="contact"
                            name ="contact" 
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.contact}
                        />

                        <label htmlFor="companyAddress">Adresse</label>
                        <input
                            id="companyAddress"
                            name ="companyAddress" 
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.companyAddress}
                        />
                        
                        <label htmlFor="telephone">Téléphone</label>
                        <input
                            id="telephone"
                            name ="telephone" 
                            type="telephone"
                            onChange={handleChange}
                            required={true}
                            value={formData.telephone}
                        />

                        <label htmlFor="interventionAddress">Adresse d'intervention</label>
                        <input
                            id="interventionAddress"
                            name ="interventionAddress" 
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.interventionAddress}
                        />

                        <label htmlFor="interventionDate">Date d'intervention</label>
                        <input
                            id="interventionDate"
                            name ="interventionDate" 
                            type="date"
                            onChange={handleChange}
                            required={true}
                            value={formData.interventionDate}
                        />
                    </section>
                    <button className="save-job">Enregistrer</button>
                </form>
            </div>
        </div>
    )
}

export default CreateJobPage