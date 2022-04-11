import { UAParser } from 'ua-parser-js'

import './app/index'
import './styles/index.scss'

const parser = new UAParser()
window.device = parser.getDevice().type
