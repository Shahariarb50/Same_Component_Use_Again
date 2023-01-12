import Practice from "./component/Practice";
import personalData from "./data/array1.js";
import studentData from "./data/array2.js";
const App = () => {
  return (
  <>
    {
      personalData.map((item,index)=>(
        <Practice key = {index} data={item}/>
      ))
    }
      {studentData.map((item,index)=>(
        <Practice key = {index} data={item}/>
      ))
    }
    </>
  )
}

export default App