import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SymptomChecker from "../components/SymptomChecker";
import Stats from "../components/Stats";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <SymptomChecker />
      <Stats />
    </>
  );
}
