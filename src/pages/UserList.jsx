import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/styles/UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );
      if (response && response.data && response.data.data) {
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      } else {
        console.error(`Failed to fetch users:`, error);
        alert("Failed to load users try again");
      }
      console.log(response.data.data);
    } catch (error) {
      console.error(`Failed to fetch users:`, error);
      alert("Failed to load users try again");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [navigate, page]);

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => page - 1);
    }
  };

  const handleEdit = (id) => {
    navigate(`/users/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete the user ?")) {
      try {
        await axios.delete(`https://reqres.in/api/users/${id}`);
        alert("User deleted Successfully");
      } catch (error) {
        console.error(`Failed to delete user:`, error);
        alert("Failed to delete user.");
      }
    }
  };

  return (
    <div className="container">
      <h1 className="header">UserList</h1>
      <div className="userGrid">
        {users.map((user) => (
          <div key={user.id} className="card">
            <img src={user.avatar} alt="avatar" className="avatar" />
            <div>
              <h3>
                {user.fistName}
                {user.LastName}
              </h3>
              <span>{`${user.first_name} ${user.last_name}`}</span>

              <p>Email: {user.email}</p>
              <div className="Buttons">
                <button
                  className="Button"
                  onClick={() => {
                    handleEdit(user.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="Button"
                  onClick={() => {
                    handleDelete(user.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination Buttons">
        <button className="Button" onClick={handlePrev} disabled={page === 1}>
          prev
        </button>
        <button
          className="Button"
          onClick={handleNext}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
