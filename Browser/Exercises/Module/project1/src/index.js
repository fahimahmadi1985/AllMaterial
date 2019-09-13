require("file-loader?name=[name].[ext]!./index.html");
import "./style.css";
import { add } from "./modules/lib";
/* for import a function,variable, class, object you can use this statement
   be carefull if you use default in export statement you dont need to write {}
*/
import { User } from "./modules/lib";

//creating an object from imported class before using it's property is required
var user = new User("fahim", "ahmadi");

/* to see the result please open http://localhost:8080  and then take a look to console*/
console.log(`FirstName: ${user.firstName} LastName: ${user.lastName}`);
user.eating();
console.log(add(4, 5));
