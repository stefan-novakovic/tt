import { useState, type FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { counterValue, decrement, increment, incrementAsync } from '../counterSlice';

export const Counter = () => {
   const dispatch = useAppDispatch();
   const value = useAppSelector(counterValue);
   const [incrementAmount, setIncrementAmount] = useState<number>(0);

   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (incrementAmount !== 0) {
         dispatch(incrementAsync(incrementAmount));
         setIncrementAmount(0);
      }
   };

   return (
      <div>
         <p>Count: {value}</p>
         <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
         </div>
         <form onSubmit={onSubmit}>
            <label htmlFor="incrementByAmount">Increment By:</label>
            <input type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(Number(e.target.value))} />
            <button type="submit">Apply</button>
         </form>
      </div>
   );
};
