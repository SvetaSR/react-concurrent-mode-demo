import React, { Suspense, useState, useTransition } from "react";
import "./styles.css";
import { TvShowList } from "./TvShowList";
import { TvShowDetails } from "./TvShowDetails";

export default function App() {

  const [id, setId] = useState(1);

  const onClick = (id) => {
    setId(id);
  }

  return (
    <div className="container">
      <h1>Top 10 TV Shows of All Time</h1>
      <div className="flex">
        <TvShowList onClick={onClick} />
        <TvShowDetails id={id} />
      </div>
    </div>
  );
}