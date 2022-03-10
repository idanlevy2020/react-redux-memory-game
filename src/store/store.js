import { createStore } from "redux";

const intialState = {
   boardGame4x4: [
      [4, 2, 5, 3],
      [3, 8, 5, 2],
      [7, 1, 8, 9],
      [9, 1, 4, 7],
   ],
};

//Todo-implement reducer()
function reducer(state, action){
	// if (action.type==="COUNTER_INCREASE")
	// 	return {...state, counter: state.counter+1};
	// if (action.type==="COUNTER_MINUS_ONE")
	// 	return {...state, counter: state.counter-1};
	return intialState;
}

console.log('intialState',intialState);


export const store = createStore(reducer);