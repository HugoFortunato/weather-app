import React from 'react'
import { SEO } from '../SEO'
import { WrapperPreview, GraphicChart, WheaterStats } from '../components'
import { Container } from '../components/Container'
import { useWheater } from '../contexts/weather'

const Home = () => {
  const { days, cardActive } = useWheater()

  return (
    <>
      <SEO
        title="Wheater App"
        description="A simple application to know the temperature anywhere"
      />
      <Container>
        <WheaterStats
          temperatureCelcius={days[cardActive]?.temp}
          wind={days[cardActive]?.wind}
          humidity={days[cardActive]?.humidity}
          conditions={days[cardActive]?.condition}
        />

        <div>
          <GraphicChart />
          <WrapperPreview cards={days} />
        </div>
      </Container>
    </>
  )
}

export default Home
