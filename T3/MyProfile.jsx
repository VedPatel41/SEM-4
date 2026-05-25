//create a react componnt named my profile in react vite project
//tHE COMPONENT SHOUD CREATE A SIMPLE UI CONTAINING :
//HEADING BY PASING JS EXPRESSION BY INLINE CSS
//PARAGRAPH
//LiST OF SKILS
//ONE IMAGE FROM ASSETS FOLDER AND ONE BUTTION
//uSE EXTERNAL CSS ANY WHERE
import './MyProfile.css'
import img1 from "./assets/hero.png"
function Myprof() {
    const myname = 'VED'
    return (
        <><h1 className='heading' style={{ fontStyle: "italic", color: 'blue', fontSize: "30px" }}>MY NAME is :{myname}</h1>
            <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate deleniti accusamus autem iusto impedit eaque sit quod, non, magnam nobis aspernatur, doloremque voluptates repellat voluptate obcaecati nesciunt ea. Iusto, corrupti.</p>
            <img src={img1} alt="" />
        </>

    )
}
export default Myprof