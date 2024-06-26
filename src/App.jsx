import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Createbook from './pages/Createbook';
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import Contest_1 from "./pages/Contest_1";
import Contest_2 from "./pages/contest2/Contest_2";
import Compete from "./pages/Compete";
import Past_contests from "./pages/Past_contests";
// import AdminPage from "./pages/AdminPage";
import MyApp from "./pages/AdminPage";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import Question_1 from "./questions/Question_1";
import BetaTest1 from "./pages/BetaTest1";
import GiantWheel from "./questions/beta1/GiantWheel";
import MakeEqual from "./questions/beta1/MakeEqual";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBook />} />
            {/* <Route path='/books/create' element={<CreateBook />} /> */}
            <Route path="/books/details/:id" element={<ShowBook />} />
            <Route path="/contest_1" element={<Contest_1 />} />
            <Route path="/contest_2" element={<Contest_2 />} />
            <Route path="/contest_2/question_1" element={<Question_1 />} />

            <Route path="/compete" element={<Compete />} />
            <Route path="/past_contests" element={<Past_contests />} />
            <Route path="/admin" element={<MyApp />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/compete/bt1" element={<BetaTest1 />} />
            <Route path="/compete/bt1/ques1" element={<GiantWheel />} />
            <Route path="/compete/bt1/ques2" element={<MakeEqual />} />
        </Routes>
    );
};

export default App;
