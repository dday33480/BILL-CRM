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
        <div className="job">
            <h1>{editMode ? 'Update your Job' : 'Create a Job'}</h1>
            <div className="job-container">
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
                    </section>
                </form>
            </div>
        </div>
    )
}

export default CreateJobPage