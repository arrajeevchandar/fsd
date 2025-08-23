import RegisterForm from "./components/RegisterForm";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);
  const reloadUsers = () => setRefresh(!refresh);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-xl">
          🚀 ERMS Registration Portal
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Glassmorphic Cards */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 transition transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/40">
            <RegisterForm onRegister={reloadUsers} />
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 transition transform hover:-translate-y-2 hover:shadow-2xl hover:border-purple-400/40">
            <UserList key={refresh} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
