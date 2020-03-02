import React, { Suspense, useState, useTransition } from "react";
import { Spinner } from "./Spinner";
import "./styles.css";
import { TvShowList } from "./TvShowList";
import { TvShowDetails } from "./TvShowDetails";

export default function App() {

  const [id, setId] = useState(1);
  const [startTransition, isPending] = useTransition({
    timeoutMs: 3000
  });

  const onClick = (id) => {
    startTransition(() => {
      setId(id);
    });
  }

  return (
    <div className="container">
      <h1>Top 10 TV Shows of All Time</h1>
      <div className="flex">
        <Suspense fallback={<Spinner />}>
          <TvShowList onClick={onClick} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <TvShowDetails id={id} />
        </Suspense>
      </div>
    </div>
  );
}