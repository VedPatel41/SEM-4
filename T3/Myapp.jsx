/*function Myapp() {
    return (
        <div>
            <h1>Hello</h1>
            <p>Reactz</p>
        </div>
    )
}*/
import "./Myapp.css";
import img1 from "./assets/hero.png";
function Myapp() {
    const name = 'React'
    return (
        < >
            {/*Inline Css */}
            <h1 style={{ color: "blue", fontStyle: "italic", fontSize: '25px' }}>
                Welcome to {name}
            </h1>
            <p className="para">
                JSX allows using HTML
            </p>
            <ol type="A">
                <li>HTML</li>
                <li>CSS</li>
            </ol>
            <img src={img1} alt="logo" width="200" />
        </>
    )
}
export default Myapp;
