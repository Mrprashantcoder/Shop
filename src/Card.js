import Style from "./Card.module.css";
import image from './asset/fasion.jpg';
const Card = () => {
  return (
    <>
      <div className={Style.card}>
        <h1 style={{textAlign:"center",padding:"12px"}}>Trending</h1>
        <div className={Style.imgCon}>
            <img src={image}></img>
        </div>
        <div style={{textAlign:"center"}}>
            <h1>Nike</h1>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",padding:"20px"}}>
            <p>I am Prashant Coders</p>
            <p>2990</p>
        </div>
      </div>
    </>
  );
};
export default Card;
