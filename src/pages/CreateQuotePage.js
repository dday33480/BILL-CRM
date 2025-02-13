import { useState } from "react"

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
            <h1>{editMode ? 'Update your Quote' : 'Create a Quote'}</h1>
            <div className="quote-container">
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

                        <label htmlFor="address">Adresse</label>
                        <input
                            id="address"
                            name ="address" 
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.address}
                        />

                        <label htmlFor="date">Date</label>
                        <input
                            id="date"
                            name ="date" 
                            type="date"
                            onChange={handleChange}
                            required={true}
                            value={formData.date}
                        />

                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name ="description" 
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.description}
                        />

                        <label htmlFor="intervention_date">Date d'intervention</label>
                        <input
                            id="intervention_date"
                            name ="intervention_date" 
                            type="date"
                            onChange={handleChange}
                            required={true}
                            value={formData.intervention_date}
                        />
                    </section>
                </form>
            </div>
        </div>
    )
}

export default CreateQuotePage