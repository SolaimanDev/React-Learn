

export default function Child(props) {
    const data="I am from child";
    props.onChildData(data);
  return (
    <div>
      <h1>Child Component</h1>
      <p></p>
    </div>
  )
}
