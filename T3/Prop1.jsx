//create a parent component Prop1.jsx pass the following data to child component Prop2.jsx using props StudentName,rollno,marks
//in child component display the details and incress marks by 1 and display the new marks 
import Prop2 from "./Prop2"
function Prop1() {
    var n = 'abc'
    return (
        <div>
            <Prop2 StudentName={n} rollno={101} marks={20} />
            <Prop2 StudentName={'pqr'} rollno={102} marks={21} />
            <Prop2 StudentName={'xyz'} rollno={103} marks={22} />
        </div>
    )
}
export default Prop1