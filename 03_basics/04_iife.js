// Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.

(function one(){   //named iife
    console.log("DB CONNECTED");
})();

// ()();   //first parenthesis is for function declaration and second parenthesis is for function invocation

// iife is used to avoid pullution of global scope

((name)=>{     //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
})("rim");