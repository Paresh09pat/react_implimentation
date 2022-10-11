import React, { useMemo, useState } from 'react';
const UseMemoHooks = () => {
   const [name, setName] = useState('Paresh');
   const [val1, setVal1] = useState(0);
   const [val2, setVal2] = useState(0);

   const answer = useMemo(() => {
      return add( val1, val2);
   }, [ val1, val2]);
   
   return (
      <div>
         {name}
         <input onChange={(e) => setName(e.target.value)} />
         <input onChange={(e) => setVal1(e.target.value)} />
         <input onChange={(e) => setVal2(e.target.value)} />
         {answer}
      </div>
   );
};

const add = (num1, num2) => {
   console.log('Adding numbers');
   return parseInt(num1) + parseInt(num2);   
};
export default UseMemoHooks
// The parseInt method parses a value as a string and returns the first integer.