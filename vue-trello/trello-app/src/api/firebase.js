import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import settings from './settings';

const firebaseApp = firebase.initializeApp(settings)

export const db = firebaseApp.database()
export default firebaseApp