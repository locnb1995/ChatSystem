export default class User{
    id: Number;
    name: String;
    age: Number;
    listGirlFriends : Array<String>;

    constructor(id: Number , name: String , age: Number , listGirlFriends:Array<String>){
        this.id = id;
        this.name = name;
        this.age = age;
        this.listGirlFriends = listGirlFriends;
    }

    getInfo(): String{
        return 'My name is : ' + this.name + ' and age : ' + this.age;
    }

    getListGirlFriend(): Array<String>{
        return this.listGirlFriends;
    }
}