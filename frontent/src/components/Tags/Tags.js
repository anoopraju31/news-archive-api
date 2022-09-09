import { Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { getTag } from "../../actions/tag"

const Tags = () => {
    const tags = useSelector(state => state.tagList)
    const dispatch = useDispatch()

    return (
        <>
            {
                tags.length > 0 &&
                <div className="tags-container">
                    {
                        tags?.map((tag, idx) => <Button key={idx} variant="primary" onClick={() => dispatch(getTag(tag))}> {tag} </Button>)
                    }
                </div>
            }
        </>
    )
}

export default Tags