{/* Student Card Component */ }
{/* Create a component named Student Card in a react vite project. The component shoud display following information: 
studentNAme:
enrollmentNumber:
course:
by passing js expression as props. */}
function StudentCard() {
    const studentName = "ABC";
    const enrollmentNumber = "1234";
    const course = "FSD"
    return (<div >
        <h1>
            Name:{studentName}
        </h1>
        <h1>
            enrollment Number: {enrollmentNumber}
        </h1>
        <h1>
            course : {course}
        </h1>
    </div>)

}
export default StudentCard