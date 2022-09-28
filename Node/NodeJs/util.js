const util = require('node:util')

async function fn(){
    return Promise.resolve('success')
}
const callbackfn = util.callbackify(fn)

// callbackfn((err, ret)=>{
//     // if(err) throw err;
//     // console.log(ret);
//     if(!err){
//         console.log(ret);
//     }else if(err && Object.hasOwn(err, 'reason') && err.reason === null){
//         console.log(err);
//     }
// })  

const debuglog = util.debuglog('foo');
debuglog('hello from foo [%d]', 456)
const enabled = util.debuglog('foo').enabled;
// console.log(enabled);
if (!enabled) {
  console.log('hello from foo [%d]', 123);
}
function someFunction(){

}

function someOtherFunction(){

}
const fn1 = util.deprecate(someFunction, "someFunction is deprecated -_-", 'DEP0001');
const fn2 = util.deprecate(someOtherFunction, "someOtherFunctiojn is deprecated -_- ", 'DEP0002');
fn1(); // Emits a deprecation warning with code DEP0001
fn2(); // Does not emit a deprecation warning because it has the same code

var format = util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 });
console.log(format);

console.log("------------------------");
// console.log(util.inspect(util, { showHidden: true, depth: null }));

const obj = {};
obj.a = [obj];
obj.b = {};
obj.b.inner = obj.b;
obj.b.obj = obj.a;

console.log(util.inspect(obj));
console.log('------------------------');
