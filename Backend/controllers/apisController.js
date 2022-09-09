import cheerio from 'cheerio'
import axios from 'axios'

const fetchData = async (url, type) => {
    try {
        let responds = await axios.get(url)
        let $ = await cheerio.load(responds.data)
        let titles = []

        const getTag = (s) => {
            const pattern = /timesofindia.indiatimes.com/
            s = pattern.test(s)? s.slice(35) : s

            const patternCity = /city/
            s = patternCity.test(s)? s.slice(5) : s

            return s.split('/')[1]
        }

        $('div > table > tbody > tr > td > div > table > tbody > tr > td > span > a').each((i, e) => {
            titles.push({
                title : $(e).text(),
                link : $(e).attr('href'),
                tag : getTag($(e).attr('href'))
            })
        })

        return titles
    } catch (error) {
        console.log(error.message)
    }
}

const startTime = (date, month, year) => {
    const _mnth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const _datestr = (date < 10? '0': '') + date +  _mnth[month-1] + ' ' + year + ' 11:00'

    const pd = new Date(_datestr)
    const od = new Date('30 Dec 1899,00:00')

    return Math.floor(((pd.getTime() - od.getTime())/86400000));
}

export const getData = async (req, res) => {
    try {
        const  d = new Date()
        d.setDate(d.getDate() - 1)

        const year = d.getFullYear()
        const month = d.getMonth() + 1
        const date = d.getDate()

        const url = `https://timesofindia.indiatimes.com/${year}/${month}/${date}/archivelist/year-${year},month-${month},starttime-${startTime(date, month, year)}.cms`
        const data = await fetchData(url, 1)

        console.log( data[0].link);
        
        res.status(200).json(data) 
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const putData = async (req, res) => {
    try {
        const { date, month, year } = req.body

        const presentdate = new Date()
        const previousDate = new Date(presentdate - 1)
        const requestDate = new Date(`${year}-${(month<9? '0' : '') + (month-1)}-${(date<10? '0' : '') + date}`)
        const lastDate = new Date('2000-01-01')

        const py = previousDate.getFullYear()
        const pm = previousDate.getMonth()
        const pd = previousDate.getDate()

        if ( requestDate < presentdate && requestDate >= lastDate) {
            const url = `https://timesofindia.indiatimes.com/${year}/${month}/${date}/archivelist/year-${year},month-${month},starttime-${startTime(date, month, year)}.cms`
            const data = await fetchData(url, 4)

            res.status(200).json(data) 
        } else {
            res.status(400).json({message: `Please enter a date 01/01/2000 and ${(pd < 10? '0' : '') + pd}/${(pm < 9? '0' : '') + (pm+1)}/${py}`})
        }
    
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
