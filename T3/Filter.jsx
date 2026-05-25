function Filter() {
   const arr = [1, 6, 9, 5, 4, 3, 7, 9];
    return (
        <div>
            {
                arr.filter((value) => value >= 6).map((value) => {
                    return <h2>Updated arr = {value} </h2>
                })
            }
        </div>
    )
}
export default Filter