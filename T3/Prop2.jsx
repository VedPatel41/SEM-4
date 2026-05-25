function Prop2(props) {
    return (

        <div>
            <ul>
                <li>Student Name: {props.StudentName}</li>
                <li>Roll No: {props.rollno}</li>
                <li>Marks: {props.marks + 1}</li>
            </ul>
        </div>
    );
}
export default Prop2