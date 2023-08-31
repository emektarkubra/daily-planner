import CalenderDays from "./components/CalenderDays";
import CalenderMonth from "./components/CalenderMonth";
import Container from "./components/Container";
import DateSelect from "./components/DateSelect";

function App() {
  return (
    <>
      <Container>
        <DateSelect />
        <CalenderDays />
        <CalenderMonth />
      </Container>
    </>
  );
}

export default App;
