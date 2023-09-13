import React from "react";
import { Loader, Center } from "@mantine/core";

const Loading = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <Loader />
    </div>
  );
};

export default Loading;
