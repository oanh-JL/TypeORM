import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {getConnection} from "typeorm";

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));

//create querybuilder for selector

const user=  getConnection()
.createQueryBuilder()
.select("user")
.from(User,"user")
.where("user.id=:id",{id:1})
.getOne();
console.log("user was read by querybuilder");

console.log(user);
