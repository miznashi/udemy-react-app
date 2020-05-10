import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {

    // ☓ 扱いにくい
    // [
    //   {"id": 1, "title1": "Let's have an event 1!", "body": "This is the body for event 1!" },
    //   { "id": 2, "title2": "Let's have an event 2!", "body": "This is the body for event 2!" }
    // ]
    // ◯ 扱いやすく
    // [
    //   1: {"id": 1, "title1": "Let's have an event 1!", "body": "This is the body for event 1!" },
    //   2: { "id": 2, "title2": "Let's have an event 2!", "body": "This is the body for event 2!" }
    // ]
    // 上記の用にするパッケージが「lodash」 これをインポートする

    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}