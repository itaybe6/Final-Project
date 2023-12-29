
import './App.css';
import Buttons from './MatirealUi/Buttons';


const addTwoNumbers = (list1, list2) => {
  let mulNum = 1;
  let num1 = 0, num2 = 0;
  let result;
  let arr =[];

  list1.forEach(node => {
    node *= mulNum;
    num1 += node;
    mulNum *= 10
  });

  mulNum = 1;

  list2.forEach(node => {
    node *= mulNum;
    num2 += node;
    mulNum *= 10
  });

  result = num1 + num2;
  result = result.toString();

  for (let i = 0; i < result.length; i++) {
      arr.push(result[i])

  }
  arr = arr.reverse()

  return arr;



}

console.log(addTwoNumbers([2,4,3],[5,6,4]))
function App() {


  return (
    <div className="App">
 <Buttons />
    </div>
  );
}

export default App;
