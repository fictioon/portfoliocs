import getId from '../../routing/getId'
import data from '../../data/cases'

let content = null

const getData = () => {
  content = data[getId()]

  return content
}

export default getData()
