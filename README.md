# **User Management App**

A simple, user-friendly React-based application for managing users. It allows you to **view, edit, and delete users**, with smooth navigation and clear feedback messages. The app uses **React Router** for routing and **Axios** for API requests.

---

### **Features**

- **Login Page:**
- Secure authentication with token persistence using `localStorage`.
- **User List Page:**
- Displays a paginated list of users fetched from `https://reqres.in/api`.
- Edit and Delete buttons for each user.
- **Edit User:**
- Pre-filled form for updating user details.
- Smooth redirection with success or error messages.
- **Note:** Since the app uses the [Reqres API](https://reqres.in), the modifications made (Edit/Delete) are not persistent, as it is a mock API.
- **Responsive UI:**
- Clean and simple layout, optimized for both desktop and mobile.

---

### ⚙️ **Tech Stack**

- **Frontend:** React.js (Hooks, Router)
- **API Requests:** Axios
- **Persistence:** LocalStorage
- **API:** [Reqres](https://reqres.in) (mock API)

---

### **Installation & Setup**

1. **Clone the repository**

```bash
git clone <repository_url>
cd user-management-app
```

### **Install dependencies**

```bash
npm install
```

### **Start the development server**

```bash
npm start
```

### **Usage**

#### **Login**

- Use any email and password (mock authentication).

#### **View Users**

- Navigate through the paginated user list.

#### **Edit User**

- Click on **"Edit"** → Modify the user details → Submit.
- _Note:_ The changes won't be saved permanently due to the limitations of the mock API.

#### **Delete User**

- Click **"Delete"** to remove the user temporarily (non-persistent).

  ***

### 🔗 **API Endpoints**

- **Get Users:**  
  `GET https://reqres.in/api/users?page=1`

- **Update User:**  
  `PUT https://reqres.in/api/users/{id}`

- **Delete User:**  
  `DELETE https://reqres.in/api/users/{id}`

- **API Documentation:**  
  [Reqres](https://reqres.in)

---

### **Enhancements**

**Improved error handling** with detailed logging.  
 **Better navigation experience** using React Router.  
 **Token persistence** with automatic redirection for better security.

---

### **Limitations**

- Since the project uses the [Reqres mock API](https://reqres.in), any modifications (**edits or deletions**) are **not saved permanently**.
- The API is for testing purposes only, and the changes do not reflect when you re-fetch the data.

---

### **How This Project Can Help You**

- **Demonstrates practical React skills**: Component-based architecture, state management, and routing.
- **Real-world scenarios**: Handling API requests, pagination, and form validation.
- **Clean and structured code**: Easy to read and maintain.
