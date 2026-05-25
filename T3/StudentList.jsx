//create a react component that contains an array of student objects with id,name,std.perfrom the following task using fileter and map
//(1) display only students with std is 5
//(2) inclress there std by 1
//(3) display the name of students with std 6
function StudentList() {
    const students = [
        { id: 1, name: "sujal;", std: 5 },
        { id: 2, name: "husain", std: 6 },
        { id: 3, name: "harshil", std: 5 },
        { id: 4, name: "sahil", std: 7 },
    ]
    return (
        <div>{
            students.filter((student) => student.std === 5).map((student) => {
                return <div>
                    <h2>Name: {student.name} </h2>
                    <h2>std = {student.std + 1}</h2>
                </div>
            })}
        </div>

    )
}
export default StudentList