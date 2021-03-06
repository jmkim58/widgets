import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePrifina, useHooks } from "@prifina/hooks";

const Container = styled.div`
  height: 200px;
  font-size: 16px;
  line-height: 200px;
  text-align: center;
  width: 200px;
`;

const Hello = ({ Context, ...props }) => {
  console.log("HELLO PROPS", props);
  const { msg, data } = props;

  //const { currentUser, onUpdate, check } = usePrifina({ appID: "HelloWidget" });
  const prifina = usePrifina({ appID: "helloWidget" });
  console.log("HELLO HOOK ", prifina);
  //console.log("Logged in user ", currentUser);
  const msgText = msg || "Hello, ";
  //const msgText = msg || "Hello, " + currentUser.name;
  const [helloText, setHelloText] = useState(msgText);
  const [helloData, setData] = useState(data);

  const dataUpdate = (data) => {
    console.log("HELLO UPDATE ", data);

    setHelloText(data.msg);
  };
  useEffect(() => {
    console.log("HELLO UPDATE INIT ");
    prifina.onUpdate("helloWidget", dataUpdate);
  }, []);

  useEffect(() => {
    console.log("UPDATE HELLO DATA ", helloData);
    if (typeof helloData !== "undefined") {
      if (helloData.msg) {
        setHelloText(helloData.msg);
      }
    }
  }, [helloData]);

  return <Container>{helloText}</Container>;
};
Hello.displayName = "Hello";

export default Hello;
