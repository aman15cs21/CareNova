import React from "react";
import Hero from "../components/Hero";
import DemoVideo from "../components/DemoVideo";
import Features from "../components/Features";
import SymptomChecker from "../components/SymptomChecker";
import Stats from "../components/Stats";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <DemoVideo />
      <Features />
      <SymptomChecker />
      <Stats />
    </>
  );
}
