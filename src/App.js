// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  const response = [
    {
      itemName: "Nirma1234",
      itemMonth: "June",
      itemDay: "123",
      itemYear: "1233444",
    },
    {
      itemName: "Surf Excel",
      itemMonth: "January",
      itemDay: "0987",
      itemYear: "12365",
    },
    {
      itemName: "555",
      itemMonth: "Great",
      itemDay: "month",
      itemYear: "You Don't know me son",
    },
  ];
  return (
    <div>
      <Card>
        <Item name={response[0].itemName}>
          Hello Jee main hoon Apki First Item
        </Item>
        <ItemDate day="06" month="January" year="2001" />

        <Item name="Surf Excel"></Item>
        <ItemDate
          day={response[1].itemDay}
          month={response[1].itemMonth}
          year={response[1].itemYear}
        />

        <Item name="555"></Item>
        <ItemDate day="My Day" month="As my Wish" year="Teri Marzi" />
        <div className="App">
          <h1>My name is Vishal Sharma</h1>
        </div>
      </Card>
    </div>
  );
}

export default App;
