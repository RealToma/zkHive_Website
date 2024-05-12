import { useEffect, useState } from "react";
import {
  Comparison,
  Connectivity,
  Faq,
  Features,
  Footer,
  Hero,
  Hivebot,
  Protecting,
  Roadmap,
} from "./Components";

export const App = () => {
  const [isLoading, setLoading] = useState(true);
  const someRequest = (): Promise<void> => {
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
  };

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".content_ring");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    //
    return null;
  }

  return (
    <div>
      <Hero />
      <Protecting />
      <Features />
      <Connectivity />
      <Hivebot />
      <Comparison />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
};
