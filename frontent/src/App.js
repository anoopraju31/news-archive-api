import { Container, Row, Col } from 'react-bootstrap'
import { DateForm, NewsList, NewsNavbar, Tags } from './components/import'
import './App.css'

const App = () => {
    return (
        <div className="App">
             <Container fluid='lg'>
                <NewsNavbar />
            </Container>

            <Container fluid="lg">
                <Row className='mt70 news-container'>
                    <Col md="8" lg='9'> 
                        <NewsList />
                    </Col>

                    <Col className='form-container' md="4" lg="3">
                        <div className="filler"> 
                            <DateForm/>
                            <Tags />
                        </div>
                    </Col>
                </Row>

            </Container> 
        </div>
    )
}

export default App
