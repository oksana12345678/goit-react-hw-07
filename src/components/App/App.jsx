import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContact } from "../../redux/operations";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContact);
  }, [dispatch]);
  return (
    <div className="mainContainer">
      <h1 className="headerText">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>loading...</b>}
      <ContactList />
    </div>
  );
}

export default App;
