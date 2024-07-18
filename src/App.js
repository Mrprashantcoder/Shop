import Style from './App.module.css';
import Card from './Card';
const App = ()=>
{
  return(
    <>
        <div className={Style.con}>
          <Card/>
        </div>
    </>
  )
}
export default App;