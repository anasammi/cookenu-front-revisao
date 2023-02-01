import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header/header/Header";
import { AddRecipePage } from "../pages/AddRecipePage/AddRecipePage";
import { DetailsPage } from "../pages/details/DetailsPage";
import { FeedPage } from "../pages/feed/FeedPage";
import { LoginPage } from "../pages/Login/LoginPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";


export const Router = () => {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<FeedPage />} />
        <Route path="/recipe/add" element={<AddRecipePage />} />
        <Route path="/recipe/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
