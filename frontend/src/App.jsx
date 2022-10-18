import { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout, Profile } from "./components";
import { Auth, Login, Signup } from "./components/auth";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Profile />} />
            <Route path="auth" element={<Auth />}>
              <Route path="" element={<Navigate to="/auth/login" replace />} />
              <Route path="Login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
