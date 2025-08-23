import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/delete/${id}`);
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  const startEditing = (user) => {
    setEditingUser(user.id);
    setFormData({ name: user.name, email: user.email, phone: user.phone });
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/users/update/${id}`, formData);
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <div className="p-6 bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl border border-white/40">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 drop-shadow">
        👥 Registered Users
      </h2>
      {users.length === 0 ? (
        <p className="text-center text-gray-600">No users found.</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-4">
                {user.profile_picture && (
                  <img
                    src={`http://localhost:5000/uploads/${user.profile_picture}`}
                    alt="Profile"
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-400 shadow-md"
                  />
                )}
                {editingUser === user.id ? (
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border p-2 rounded shadow-sm"
                    />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border p-2 rounded shadow-sm"
                    />
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="border p-2 rounded shadow-sm"
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleUpdate(user.id)}
                        className="bg-green-500 text-white px-4 py-1 rounded-lg shadow hover:scale-105 transition-transform"
                      >
                        💾 Save
                      </button>
                      <button
                        onClick={() => setEditingUser(null)}
                        className="bg-gray-500 text-white px-4 py-1 rounded-lg shadow hover:scale-105 transition-transform"
                      >
                        ❌ Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1">
                    <p className="font-bold text-lg text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-sm text-gray-600">{user.phone}</p>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => startEditing(user)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:scale-105 transition-transform"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:scale-105 transition-transform"
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
