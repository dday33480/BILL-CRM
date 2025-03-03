import { useState } from "react"
import QuotePDF from '../components/pdf/Quote'

const CreateQuotePage = () => {

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
        <div className="create-quote">
            <h1>{editMode ? 'Éditer un devis' : 'Créer un devis'}</h1>
            <div className="quote-container">
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
                        <label htmlFor="address"><u>Adresse :</u></label>
                        <input
                            id="address"
                            name ="address" 
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.address}
                        />
                        <hr />
                        <label htmlFor="date"><u>Date du devis :</u></label>
                        <input
                            id="date"
                            name ="date" 
                            type="date"
                            onChange={handleChange}
                            required={true}
                            value={formData.date}
                        />
                        <hr />
                        <label htmlFor="description"><u>Description :</u></label>
                        <textarea
                            id="description"
                            name ="description" 
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.description}
                        />

                        <label htmlFor="intervention_date"><u>Date d'intervention :</u></label>
                        <input
                            id="intervention_date"
                            name ="intervention_date" 
                            type="date"
                            onChange={handleChange}
                            required={true}
                            value={formData.intervention_date}
                        />
                        <hr />
                    </section>
                    <button className="save-quote">Enregistrer</button>
                </form>
            </div>            
            <div className="pdf-container">
                <QuotePDF />
            </div>
        </div>
    )
}

export default CreateQuotePage