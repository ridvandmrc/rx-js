import axios from 'axios'
import {
  Observable,
  from,
  tap,
  concatAll,
  concatMap,
  of,
  map,
  filter,
  mergeAll,
} from 'rxjs'
export const firstObservable = () => {
  return new Observable((subscriber) => {
    subscriber.next('first value')
    subscriber.complete()
    subscriber.next('second value')
    subscriber.next('third value')
  })
}

export const observableWithTimeout = () => {
  return new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next('data arrived after 2 seconds')
    }, 2000)
  })
}

export const nestedObservables = () => {
  return of(of(1, 2), of(3, 4)).pipe(mergeAll())
}

export const testConcatMap = () => {
  return of(of(1, 2, 3), of(8, 9)).pipe(
    concatAll(),
    map((data) => data + 1),
  )
}

export const observableOperators = () => {
  return from(
    axios.request({
      method: 'GET',
      url: 'https://fake-movie-database-api.herokuapp.com/api?s=batman',
    }),
  ).pipe(
    tap((data) => console.log('dataaa: ', data)),
    map((data) => data.data.Search),
  )
}
