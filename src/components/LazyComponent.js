import React from "react";
import { lazy, Suspense } from "react";

// lazy load component
const About = lazy(() => import("./About"));

const LazyComponent = () => {
  return (
    <>
      <h1>Lazily loading components123</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </>
  );
};

export default LazyComponent;
