import { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Layout,
  Profile,
  Auth,
  Login,
  Register,
  Home,
  ProtectedRoute,
} from "./components";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route index element={<Home />} />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="auth" element={<Auth />}>
              <Route path="*" element={<Navigate to="/auth/login" replace />} />
              <Route path="" element={<Navigate to="/auth/login" replace />} />
              <Route
                path="login"
                element={
                  <ProtectedRoute mustBeNotAuthorized>
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route
                path="register"
                element={
                  <ProtectedRoute mustBeNotAuthorized>
                    <Register />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
