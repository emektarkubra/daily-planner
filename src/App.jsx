import { useContext } from "react";
import CalenderDays from "./components/CalenderDays";
import CalenderMonth from "./components/CalenderMonth";
import Container from "./components/Container";
import DateInfo from "./components/DateInfo";
import DateSelect from "./components/DateSelect";
import { DateContext } from "./context/DateContext";

function App() {
  const { isOpen } = useContext(DateContext);
  return (
    <>
      <Container>
        <DateSelect />
        <CalenderDays />
        <CalenderMonth />
      </Container>
      {isOpen ? <DateInfo /> : ""}
    </>
  );
}

export default App;
