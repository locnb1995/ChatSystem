import * as mongodb from 'mongodb';

export default class User{
    _id: mongodb.ObjectID;
    username: String;
    password: String;
    role: Number;
    socket_id: String;
}