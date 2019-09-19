import React, { useState, Fragment } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const Index = () => {
  const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Layout>
      <p style={{ padding: `20px 20px` }}>This is the home page</p>
      <Link to="/binary-search">Binary Search</Link>
      <Link to="/bubble-sort">Bubble Sort</Link>
    </Layout>
  );
};

export default Index;
