import React, { useState, useEffect } from 'react'
import Background from './Components/Background/background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'



export const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" }
  ]

  const [playStatus, setPlayStatus] = useState(false)
  const [heroCount, setHeroCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        setHeroCount={setHeroCount}
        heroCount={heroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
      />
    </div>
  )
}

export default App