import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/polymet/layouts/layout";
import Home from "@/polymet/pages/home/home";
import RoiLanding from "@/polymet/pages/roi-landing";
import BrandPresence from "@/polymet/pages/brand-presence";
import ChatbotOptimization from "@/polymet/pages/chatbot-optimization";

export default function MainApp() {
  const [currentPage, setCurrentPage] = useState("roi-landing");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
              <RoiLanding />
            </Layout>
          }
        />

        <Route
          path="/home"
          element={
            <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/brand-presence"
          element={
            <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
              <BrandPresence />
            </Layout>
          }
        />

        <Route
          path="/chatbot-optimization"
          element={
            <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
              <ChatbotOptimization />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
