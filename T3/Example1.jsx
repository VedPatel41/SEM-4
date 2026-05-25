//to pass on object to one Component to another component using props
//1 create a parent component Example1.jsx and create an object NAMED dETAILS with the following properties StudentName,university
//2 pass the object the details to child component Example.jsx
//(3) in child component recive the object and display the details
import Example from "./Example"
function Example1() {
    var details = {
        StudentName1: 'abc',
        university: 'LJ University'
    }
    return (
        <div>
            <Example details={details} />
        </div>
    )
}
export default Example1