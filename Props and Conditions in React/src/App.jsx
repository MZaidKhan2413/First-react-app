import Card from "./components/Card"

function App() {
  return (
    <>
      <Card name="Zaid" info={[20, "Male", "Programmer"]}/>
      <Card name="ABC" info={["Object"]}/>
      <Card info={[18, "Female", "Teacher"]}/>
      <Card name="XYZ"/>
    </>
  )
}

export default App
