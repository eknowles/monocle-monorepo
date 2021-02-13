import type { FC } from "react";
import React from "react";
import { useMonocleState } from "../../services/monocle/use-monocle";

const Home: FC = () => {
  const { state } = useMonocleState();
  return (
    <div>
      <h1>home</h1>
      <p>test</p>
      <pre>
        <code>
          {JSON.stringify(state, null, 2)}
        </code>
      </pre>
    </div>
  );
};

export default Home;
