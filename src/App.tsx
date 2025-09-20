import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/theme-provider";
import Navigation from "@/components/Navigation";
import ScrollLine from "@/components/ScrollLine";
import Home from "./pages/Home";
import TextAI from "./pages/TextAI";
import ImageAI from "./pages/ImageAI";
import HeadshotsAI from "./pages/HeadshotsAI";
import VideoEditorsAI from "./pages/VideoEditorsAI";
import DataAI from "./pages/DataAI";
import VoiceAI from "./pages/VoiceAI";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="nannu-ui-theme">
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <ScrollLine />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/text-ai" element={<TextAI />} />
            <Route path="/image-ai" element={<ImageAI />} />
            <Route path="/headshots-ai" element={<HeadshotsAI />} />
            <Route path="/video-editors-ai" element={<VideoEditorsAI />} />
            <Route path="/data-ai" element={<DataAI />} />
            <Route path="/voice-ai" element={<VoiceAI />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
