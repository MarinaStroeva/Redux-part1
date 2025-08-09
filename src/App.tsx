import { Counters } from "./modules/counters/counters";
import { UsersList } from "./modules/users/users-list";
import "./App.css";

function App() {
  return (
    <div className="container p-5 flex flex-col gap-5">
      <Counters />
      <UsersList />
    </div>
  );
}

export default App;
