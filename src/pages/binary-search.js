import React, { useState, Fragment } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

import BinarySearch from "../components/algorithms/BinarySearch";

const Index = () => {
  const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Layout>
      <BinarySearch sortedList={sortedList} />
      {/*
        Can add a description of binary search here and maybe add a component that has text explaining what happens. I'm not sure.
      */}
    </Layout>
  );
};

export default Index;
