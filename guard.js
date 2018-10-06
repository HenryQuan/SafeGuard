const mydata = {
  hello: {
    yes: '1',
    no: '2',
    hello: {
      yes: '3',
      no: '4',
      hello: {
        yes: '5',
        no: '6',
        hello: {
          yes: '7',
          no: '8',
        },
      },
    },
  },
  list: [
    {1: { num: 1 }},
    {2: { num: 2 }},
    {3: { num: 3 }},
    {4: { num: 4 }},
    {5: { num: 5 }},
  ]
}

/**
 * Reference: https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a
 */

// take object, path and the default value
const guard = (obj, path, dval) => {
  // check if object is valid and path does not start with or end with '.'
  if (obj && (path.startsWith('.') || path.endsWith('.'))) return dval;
  else {
    // get path as an array
    let p = path.split('.');
    // o is the object (accumulator), and n is from path (current value)
    // o && o[n] -> to go further or just return default value
    return p.reduce((o, n) => (o && o[n]) ? o[n] : dval, obj)
  }
}

console.log(guard(mydata, 'hello', 0));
