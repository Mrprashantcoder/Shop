import Style from './App.module.css';
import Card from './Card';
const App = ()=>
{
  return(
    <>
      <h1 style={{textAlign:"center",padding:"15px"}}>PRS Shoping</h1>
        <div className={Style.con}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
         
         
          
        </div>
    </>
  )
}
export default App;