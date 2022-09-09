import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <div className="spinner-container">
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
        </div>
    )
}

export default Loader