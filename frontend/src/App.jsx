import { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout, Profile, Auth, Login, Register } from "./components";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Profile />} />
            <Route path="auth" element={<Auth />}>
              <Route path="" element={<Navigate to="/auth/login" replace />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
