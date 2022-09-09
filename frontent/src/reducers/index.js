import { combineReducers } from "redux"
import { data } from './data'
import { load } from './load'
import { tagList } from './tagList'
import { tag } from './tag'
import { tagNews } from './tagNews'

export const reducers = combineReducers({ data, load, tagList, tag, tagNews })