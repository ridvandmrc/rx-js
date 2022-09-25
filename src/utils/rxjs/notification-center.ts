import { Subject } from 'rxjs'
import { INotificationProps } from '../../components/Notification'

class Notification {
  public _observable = new Subject<INotificationProps>()

  public sendSuccess = (message: string) => {
    this._observable.next({ message: message, type: 'success' })
  }

  public sendError = (message: string) => {
    this._observable.next({ message: message, type: 'error' })
  }
}

export const notification = new Notification()
export const notificationObservable = notification._observable
