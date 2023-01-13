function calculate(args) {
    const op = args.op;
    const n1 = args.n1;
    const n2 = args.n2;
    return (op === '+')? (n1 + n2) :
           (op === '-')? (n1 - n2) : 'Not supported';
    }
    console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
    console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3
    console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'