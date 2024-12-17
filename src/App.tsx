import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import AuthModal from "./components/auth/AuthModal.tsx";
import Actor from "./components/list/ActorList.tsx";
import Director from "./components/list/DirectorList.tsx";
import Movie from "./components/list/MovieList.tsx";
import EntityDetailPage from "./pages/EntityDetailPage.tsx";
import MovieDetailPage from "./pages/MovieDetailPage.tsx";
import SearchResults from "./pages/SearchResults.tsx";

const App: React.FC = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    return (
        <Router>
            <div className="flex flex-col min-h-screen ">
                <Navbar onAuthClick={() => setIsAuthModalOpen(true)} />

                <main className="flex-grow mx-auto">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/actors" element={<Actor />} />
                        <Route path="/movies" element={<Movie />} />
                        <Route path="/directors" element={<Director />} />
                        <Route path="/:type/:id" element={<EntityDetailPage />} />
                        <Route path="/movies/:id" element={<MovieDetailPage/>} />
                        <Route path="/search" element={<SearchResults />} />
                    </Routes>
                </main>

                <Footer />

                {isAuthModalOpen && (
                    <AuthModal onClose={() => setIsAuthModalOpen(false)} />
                )}
            </div>
        </Router>
    );
};

export default App;
