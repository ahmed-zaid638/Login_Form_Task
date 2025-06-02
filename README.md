# 👨‍💻 Login Form With React
### Demo :https://login-form-task-amber.vercel.app/

## 📌 Features
-  Login Form with email/password validation
-  Token-based authentication flow
-  Redirect to Dashboard upon successful login
-  Dashboard shows user ID and name
-  Logout functionality (clears token & data)
-  Validation errors for invalid or empty inputs
-  Displays API error messages for failed login attempts
-  Zustand used for global auth state


---

## 🧰 Tech Stack

- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **React Router**
- **Zustand** (state management)
- **React Hot Toast** (notifications)
- **React Icons**

---

## 🔄 Flow (Normal Scenario)

1. Visit `http://localhost:3000`
2. If a valid token exists, redirect to **dashboard**
3. If not, show **Login Form**
4. User enters:
   - **Email**: `dev.aert@gmail.com`
   - **Password**: `helloworld`
   
