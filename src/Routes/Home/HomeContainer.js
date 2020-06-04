import React from "react"
import HomePresenter from "./HomePresenter"

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  }

  render() {
    const { nowPlaying, upcoming, popular, error, state } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        state={state}
      />
    )
  }
}

export default HomeContainer
