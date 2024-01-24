import hello from "./module.js";
import { name, age as num, obj, arr } from "./module.js";
import { a, b } from "./index.js";

hello();
console.log(name);
console.log(num);
console.log(obj);
console.log(arr);
a();
b();
