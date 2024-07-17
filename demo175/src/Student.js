let list = [
  { id: 1, name: "A", age: 20, score: 10 },
  { id: 2, name: "B", age: 20, score: 10 },
  { id: 3, name: "C", age: 20, score: 10 },
  { id: 4, name: "D", age: 20, score: 10 },
];

export default function Student() {
  return (
    <>
      <table border={"1"}>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Score</td>
          <td>Age</td>
        </tr>

        {list.map((e) => (
          <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.score}</td>
            <td>{e.age}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
