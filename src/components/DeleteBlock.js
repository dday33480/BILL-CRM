const DeleteBlock = () => {

    const deleteJob = () => {
        console.log("deleted")
    }

    return (
        <div className="delete-block">
            <div className="delete-icon" onClick={deleteJob}>🗑</div>
        </div>
    )
}

export default DeleteBlock