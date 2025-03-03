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
            <h1>{editMode ? 'Éditer une intervention' : 'Créer une intervention'}</h1>
            <div className="job-creation-container">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="title"><u>Entreprise :</u></label>
                        <input
                            id="title"
                            name ="title" 
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.title}
                        />
                        <hr />
                        <label htmlFor="contact"><u>Nom du Contact :</u></label>
                        <input
                            id="contact"
                            name ="contact" 
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.contact}
                        />
                        <hr />
                        <label htmlFor="companyAddress"><u>Adresse :</u></label>
                        <input
                            id="companyAddress"
                            name ="companyAddress" 
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.companyAddress}
                        />
                        <hr />                        
                        <label htmlFor="telephone"><u>Téléphone :</u></label>
                        <input
                            id="telephone"
                            name ="telephone" 
                            type="telephone"
                            onChange={handleChange}
                            required={true}
                            value={formData.telephone}
                        />
                        <hr />
                        <label htmlFor="interventionAddress"><u>Adresse d'intervention :</u></label>
                        <input
                            id="interventionAddress"
                            name ="interventionAddress" 
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.interventionAddress}
                        />
                        <hr />
                        <label htmlFor="interventionDate"><u>Date d'intervention :</u></label>
                        <input
                            id="interventionDate"
                            name ="interventionDate" 
                            type="date"
                            onChange={handleChange}
                            required={true}
                            value={formData.interventionDate}
                        />
                        <hr />
                    </section>
                    <button className="save-job">Enregistrer</button>
                    <button className="invoice-pdf">Créer facture</button>
                </form>
            </div>
        </div>
    )
}

export default CreateJobPage