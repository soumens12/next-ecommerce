"use client"
import React from 'react'
import Hero from './components/Hero'
import Collection from './components/Collection'
import HomepageWomensCat from './components/HomepageWomensCat'
import HomepageMensCat from './components/HomepageMensCat'

function page({ }) {
  return (
    <>
      <Hero />
      <HomepageWomensCat />
      <Collection />
      <HomepageMensCat />

    </>
  )
}

export default page
