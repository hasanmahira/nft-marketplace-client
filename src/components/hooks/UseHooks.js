import { useState, useEffect } from "react";

export default function UseHooks(subject, initialValue) {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    const value = subject.subscribe((val) => setData(val));

    return () => value.unsubscribe();
  }, []);

  return data;
}
