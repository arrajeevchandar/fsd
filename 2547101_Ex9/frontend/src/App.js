import RegisterForm from "./components/RegisterForm";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);
  const reloadUsers = () => setRefresh(!refresh);

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">ERMS Registration</h1>
      <RegisterForm onRegister={reloadUsers} />
      <UserList key={refresh} />
    </div>
  );
}

export default App;
