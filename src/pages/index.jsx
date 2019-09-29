import React from 'react'
import styled from 'styled-components'
import Card from '../components/layout/Card'
import Layout from '../components/layout/Layout'

const CardWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 700px;
  margin: 25vh auto;
`

const HomePage = () => (
  <Layout>
    <CardWrapper>
      <Card title="Bubble Sort" />
      <Card title="Quick Sort" />
      <Card title="Merge Sort" />
      <Card title="Selection Sort" />
    </CardWrapper>
  </Layout>
)

export default HomePage
