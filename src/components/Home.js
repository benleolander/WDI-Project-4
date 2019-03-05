import React from 'react'


const Home = () => {
  return(
    <section>
      <div className="columns is-mobile is-multiline">
        <div className="column is-half-desktop is-full-tablet is-full-mobile" id="homeColumn1">
          <a href="/whiskies"className="title home-hero-title">Explore Whiskies</a>
        </div>

        <div className="column is-half-desktop is-full-tablet is-full-mobile" id="homeColumn2">
          <a href="/distilleries"className="title home-hero-title">Explore Distilleries</a>
        </div>
      </div>
    </section>
  )
}

export default Home
