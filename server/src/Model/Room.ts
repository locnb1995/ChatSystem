import * as mongodb from 'mongodb';
import User from './User';

export default class Room {
    _id: mongodb.ObjectID;
    type: Object;
    member: Array<User>;
    message: Array<Object>;
}