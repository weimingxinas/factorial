onmessage = function(e) {
  const {args, method} = e.data;
  if (method === 'factorialA') {
    const start = (new Date()).getTime();
    console.time('worker')
    const res = factorialA(args)
    console.timeEnd('worker')
    const end = (new Date()).getTime();
    const time = end - start;
    postMessage({res, time})    
  } else if (method === 'factorialB') {
    const start = (new Date()).getTime();
    console.time('worker')
    const res = factorialB(args)
    console.timeEnd('worker')
    const end = (new Date()).getTime();
    const time = end - start;
    postMessage({res, time}) 
  }
}
function factorialA(n){
  if (!n && n !== 0) {
    throw "No parameter exists";
  }
  if (n && isNaN(n)) {
    throw "parameter is not a number!";
  }
  if (n < 0) {
    throw "parameter is not a positive integer!";
  }
  const num = BigInt(n);
  const start = BigInt(Math.floor(n/2) + 1);
  let res = BigInt(1);
  for(let i= start;i<= num;i++){
    res = res * i;
  }
  return res;
}
function factorialB(m){
  if (!m && m !== 0) {
    throw "No parameter exists";
  }
  if (m && isNaN(m)) {
    throw "parameter is not a number!";
  }
  if (m<=0) {
    throw "parameter is not a positive integer!";
  }
  const mid = Math.floor(m/2);
  function recursive(n) {
    if (n === 1) {
      return BigInt(1);
    }
    const num = BigInt(n);
    return num * recursive(n - 1);        
  }
  return recursive(mid)
}