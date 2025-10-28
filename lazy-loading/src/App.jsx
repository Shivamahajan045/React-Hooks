import { Suspense } from "react";
// import LazyLoading from "./LazyLoading";
import React from "react";

let Lazy = React.lazy(() => import("./LazyLoading"));
function App() {
  return (
    <>
      <h1>Learning Lazy loading...</h1>
      <Suspense fallback={<p>Loading........</p>}>
        <Lazy />
      </Suspense>
    </>
  );
}

export default App;
