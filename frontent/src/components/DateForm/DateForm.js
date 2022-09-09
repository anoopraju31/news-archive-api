import { useState, useEffect} from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../actions/data'
//import { loadOn } from '../../actions/load'

const DateForm = () => {
    var d = new Date()
    d.setDate(d.getDate() - 1)
    
    const [date, setDate] = useState(d.getDate())
    const [month, setMonth] = useState(d.getMonth() + 1)
    const [year, setYear] = useState(d.getFullYear())

   // const load = useSelector((state) => state.load)
    const dispatch = useDispatch()

    // useEffect(() => {
    //   dispatch(getData({date, month, year}))
    // }, [load, dispatch])
    


    return (
        <form className="form_box" action="">
            <InputGroup className="mb-3">
                <InputGroup.Text id="date"> Date </InputGroup.Text>
                <Form.Control
                    placeholder="Date"
                    aria-label="Date"
                    aria-describedby="date"
                    value={date}
                    onChange={e => (setDate(e.target.value))}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="month"> Month  </InputGroup.Text>
                <Form.Control
                    placeholder="Month"
                    aria-label="Month"
                    aria-describedby="month"
                    value={month} 
                    onChange={e => (setMonth(e.target.value))} 
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="year"> Year </InputGroup.Text>
                <Form.Control
                    placeholder="Year"
                    aria-label="Year"
                    aria-describedby="year"
                    value={year} 
                    onChange={e => (setYear(e.target.value))} 
                />
            </InputGroup>

            <div className="d-grid gap-2">
                <Button 
                    variant="primary" 
                    onClick={() => dispatch(getData({date, month, year}))}
                > 
                    { //load? 'Loading...' : 'Submit' 
                    } 
                    Submit
                </Button>
            </div>
        </form>
    )
}

export default DateForm