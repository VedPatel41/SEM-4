function List() {
    const studs = [
        { id: 1, name: "s1" },
        { id: 2, name: "s2" },
        { id: 3, name: "s3" },
        { id: 4, name: "s4" }
    ]
    return (
        <ul>
            {
                studs.map((stud) => {
                    return <li key={stud.id}>{stud.name}</li>
                })
            }
        </ul>
    )
}
export default List