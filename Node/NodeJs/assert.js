const assert = require('node:assert').strict;
// const assert = require('node:assert');

function add(a,b){
    return a + b;
}

assert(add(1,2) === 3,'1+2=3' ); //if condition true it will return nothing but if fails throw error


assert.deepStrictEqual("inkal","inkal");
assert.deepEqual(new Date(26/09/2022), new Date(26/09/2022));

const {message} = new assert.AssertionError({
    actual: 1,
    expected:2,
    operator: 'strictEqual'
})

try {
    assert.strictEqual(1,2);
}
catch(err){
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);
    assert.strictEqual(err.name, 'AssertionError');
    assert.strictEqual(err.actual, 1);
    assert.strictEqual(err.expected,2);
    assert.strictEqual(err.code,'ERR_ASSERTION');
    assert.strictEqual(err.operator, 'strictEqual');
    assert.strictEqual(err.generatedMessage, true)
}

const tracker = new assert.CallTracker();

const callFunc = tracker.calls(add,2);
callFunc(1,2);
callFunc(1,2);
tracker.report(); 
process.on('exit',()=>{
    tracker.verify();
});

assert.deepEqual(1!==1, false);


const obj1 = {
    a: {
        b:1
    }
}

const obj2 = {
    a:{
        b:2
    }
}

const obj3 = {
    a:{
        b:1
    }
}
const obj4 = Object.create(obj1)

try {
    assert.deepEqual(obj1, obj1);
    assert.deepEqual(obj2, obj1);
    assert.deepEqual(obj3, obj1)
    assert.deepEqual(obj3, obj4) //can't true bcoz prototypes are ignored
}
catch(error){
    console.log(error.message);
    assert(error instanceof assert.AssertionError);
}

assert.doesNotMatch('123', /pass/)
// assert.doesNotMatch(123, /pass/) //for not to match must be both string

assert.doesNotMatch("I'll pass", /fail/)

assert.fail(new TypeError('need array'));