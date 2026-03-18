'use client'
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div style={{padding:20}}>
      <h1>Học hôm nay vì bạn của ngày mai</h1>
      <button onClick={() => setCount(count+1)}>
        Click: {count}
      </button>
    </div>
  );
}