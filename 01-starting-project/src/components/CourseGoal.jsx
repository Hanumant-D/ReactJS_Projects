export default function CourseGoal(props) {
  return (
      <div className="core-concepts">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
  )
}