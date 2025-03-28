import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/UserList.css";

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

  return (
    <div className="container">
      <h1 className="header">UserList</h1>
      <div className="userGrid">
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.avatar} alt="avatar" />
            <div>
              <h3>
                {user.fistName}
                {user.LastName}
              </h3>
              <p>Email: {user.email}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} disabled={page === 1}>
        previous
      </button>
      <button onClick={handleNext} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default UserList;
