import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const EditUSer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      if (response && response.data && response.data.data) {
        const { first_name, last_name, email } = response.data.data;
        setUser({ first_name, last_name, email });
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
      alert("Failed to load user details.");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      alert(`user updated Successfully `);
      navigate("/user");
    } catch (error) {
      console.error("Failed to update user:", error);
      alert("Failed to update user.");
    }
  };
  return (
    <>
      <div>
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="emailInput ">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => {
              Navigate("/user");
            }}
          >
            cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default EditUSer;
