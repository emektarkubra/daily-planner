import { useContext } from "react";
import CalenderDays from "./components/CalenderDays";
import CalenderMonth from "./components/CalenderMonth";
import Container from "./components/Container";
import DateModal from "./components/DateModal";
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
      {isOpen ? <DateModal /> : ""}
    </>
  );
}

export default App;
