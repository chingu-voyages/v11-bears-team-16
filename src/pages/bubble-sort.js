import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layout";
import BubbleSort from "../components/algorithms/BubbleSort";

const BubbleSortPage = () => {
  return (
    <Layout>
      <BubbleSort />
    </Layout>
  );
};

export default BubbleSortPage;
