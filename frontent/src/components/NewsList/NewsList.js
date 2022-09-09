import { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { loadOff } from '../../actions/load'
import { getTagList } from '../../actions/tagList'
import { getTagNews } from '../../actions/tagNews'
import MessageAlert from '../MessageAlert/MessageAlert'

const NewsList = () => {
    const data = useSelector(state => state.data)
    const tag = useSelector(state => state.tag)
    const tagNews = useSelector(state => state.tagNews)
    const dispatch = useDispatch()

    var tags = []


    useEffect(() => {
        dispatch(loadOff())

        const selectTags = () => {
            data.forEach(d => {
                    tags.push(d.tag)
            })

            tags = tags.filter((value, index, self) => self.indexOf(value) === index );

            dispatch(getTagList(tags))
        }

        selectTags()
    }, [data, dispatch])

    useEffect(() => {
        const selectTagNews = () => {
            if (tag === '') dispatch(getTagNews(data))
            else {
                let news = data.filter(value => value.tag === tag)
                dispatch(getTagNews(news))
                console.log('news -> ', tag, news)
            }
        }
        
        selectTagNews()
    }, [tag, dispatch, data])
    
    
    return (
        <div className='mb-70'>
            <div className="news-header">
                <h1> { tag } News Archive </h1>
            </div>

            <ListGroup variant="flush" >
                {
                    data?.message? <MessageAlert message={data?.message} /> :
                    tagNews?.map((d, idx) => (
                        <ListGroup.Item 
                            className='list' 
                            key={idx} 
                        > 
                            {d.title} 
                        </ListGroup.Item>
                    ))
                   }
            </ListGroup>
        </div> 
    )
}

export default NewsList