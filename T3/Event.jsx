//write a js script to display an alert box to display welcome to LJ by clicking a button
function Event() {
    // function handleClick() {
    //     alert("Welcome to LJ");
    // }
    // return (
    //     <div>
    //         <button onClick={handleClick}>Click Me</button>
    //     </div>
    // )
    // function handleChange(e) {
    //     console.log(e.target.value);
    // }
    // return (
    //     <div>
    //         <input type="text" onChange={handleChange} />
    //     </div>
    // )
    function handleSubmit(e) {
        e.preventDefault();
        alert("you clicked submit");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Event