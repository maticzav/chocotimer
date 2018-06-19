import React from "react"
import ReactDOM from "react-dom"

import "bulma/css/bulma.css"
import "./styles.css"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      percentage: 70,
    }

    this.handlePercantageChage = this.handlePercantageChage.bind(this)
  }

  handlePercantageChage = e => {
    this.setState({
      percentage: e.target.value,
    })
  }

  getTime = percentage => {
    const exact =
      0.000117654 * percentage ** 4 -
      0.0279875 * percentage ** 3 +
      2.20648 * percentage ** 2 -
      61.7018 * percentage +
      390.675
    return Math.round(exact)
  }

  render() {
    return (
      <React.Fragment>
        <header className="has-background-primary has-margin-bottom has-padding">
          <h1 className="title is-size-1 has-text-light has-text-centered has-text-weight-bold">
            ChocoTimer{" "}
            <span role="img" aria-label="tada">
              🍫
            </span>
          </h1>
          <h2 className="subtitle has-text-grey-dark has-text-centered has-text-weight-semibold	">
            {`Caluclate how long it's going to take to melt 20g of chocolate.`}
          </h2>
        </header>

        <main className="container has-padding">
          <div className="columns">
            <div className="column">
              <h2>What is the percentage of cocoa in your chocolate?</h2>
              <div class="field has-margin-bottom">
                <div class="control">
                  <input
                    class="input is-large"
                    type="number"
                    placeholder="Large input"
                    onChange={this.handlePercantageChage}
                    value={this.state.percentage}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <blockquote className="has-text-centered">
                <p>{`It'll take you`}</p>
                <label className="is-size-1">
                  {this.getTime(this.state.percentage)} seconds
                </label>
                <p>
                  to melt your chocolate!{" "}
                  <span role="img" aria-label="tada">
                    🎉
                  </span>
                </p>
              </blockquote>
            </div>
          </div>
        </main>
        <footer className="footer has-little-padding">
          <div className="">
            <div className="content has-text-centered">
              <p>Matic Zavadlal, Reja Debevc, Katarina Ham, Luka Didi Kaiser</p>
            </div>
            <div className="has-text-centered">
              <p>
                <span role="img" aria-label="tada">
                  ❤️🧠🍫
                </span>
              </p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
