import React, { useState, useEffect } from "react";
import App from "../src/Hello";

export default { title: "Test" };

export const app = () => {
  /*
  const [onUpdate, set] = useState({});
  useEffect(() => {
    let timer = null;

    timer = setTimeout(() => {
      set({ msg: "OK" });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  */

  return <App msg={"Hello, Tero"} />;
};
app.story = {
  name: "App",
};
