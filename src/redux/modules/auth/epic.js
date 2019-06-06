import { ofType } from "redux-observable";
import { actionType, authSuccess, unauthorized, authorized } from './action';
import { startLoading, endLoading } from '../loading/action'
import { Observable, of , from} from "rxjs";
import { mergeMap, map, switchMap } from "rxjs/operators";
import * as firebase from 'firebase/app'
import { push } from "connected-react-router";

export const authEpic = action$ => action$.pipe(
    ofType(actionType.AUTH),
    mergeMap(action => from(firebase.auth().signInWithPopup(action.payload))),
    switchMap(result => {
        console.log("lmao")
         return  [authSuccess(result.credential.accessToken),push('/dashboard')]
    } )
);

export const checkAuthEpic = action$ => action$.pipe(
    ofType(actionType.CHECK_AUTH),
    mergeMap(action => of(firebase.auth().currentUser)),
    mergeMap(user => user == null ? [endLoading(), unauthorized()] : [endLoading(), authorized()])
)
