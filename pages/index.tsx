import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();

  const navigateTo = () => {
    router.push("/page3");
  };

  return (
    <div>
      main page
      <br/>
      <button title="go to page 3" onClick={navigateTo} />
    </div>
  );
};

export default Index;
