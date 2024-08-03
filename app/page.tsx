import Card from "@/src/Components/card";
import React, { CSSProperties } from "react";

const Page = () => {
  var x: Number = 10;
  x = "12";

  console.log("x: ", x);

  // int x = 10 ;
  return (
    <div className="container" style={styles.conatiner}>
      <text id="bigTitle" className="title italic m-2">
        Code Zone Web
      </text>
      <text id="bigTitle">Code Zone Web</text>
      <Card name={"Code Zone"} date={new Date()} phone={"02"} color="a" />
    </div>
  );
};

const styles: CSSProperties = {
  conatiner: {
    backgroundColor: "green",
    flex: 1,
  },
};

export default Page;
