import { module } from './module.js';
import { ContextHolder } from './org/springframwork/costant/ContextHolder.js';
const m1  = new module();
module.testMethod();
module.testMethod2();






const m2 =  (str) =>  console.log("tests"+str);

m2("arrrow");


var configHolder = new ContextHolder();
console.log(configHolder);
var map = configHolder.getCacheMap ;



// console.log(map.get(1));
