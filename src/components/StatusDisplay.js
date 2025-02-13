const StatusDisplay = ({ status }) => {

    const getColor = (status) => {
        let color
        switch (status) {
                case 'Done':
                    color = 'rgb(1, 138, 69)'
                    break
                case 'In Progress':
                    color = 'rgb(239, 210, 85)'
                    break
                case 'Stuck':
                    color = 'rgb(202, 0, 0)'
                    break
                default:
                    color = 'rgb(0, 0, 194)'

    }
    return color
}

    return (
        <div className="status-display" style={{backgroundColor: getColor(status)}}>
            <p>{status}</p>
        </div>
    )
}

export default StatusDisplay