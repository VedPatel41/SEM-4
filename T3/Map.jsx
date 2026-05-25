// to render a component to display all array elements in h2 tag using map function
function Map() {
    const arr = [1, 2, 3, 4, 5];
    return (
        <div>
            <h1>Map Ex</h1>{
                arr.map((value) => {
                    return <h2>array element = {value}</h2>
                }
                )}
        </div>
    )
}
export default Map