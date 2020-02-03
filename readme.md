### ![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)


### 🚩 Project-2 - A + L (Pair Coding Project) ###
The second project of the software engineering immersive course at GA London is a small Hackathon(Reacathon). The assignment was to build a React app that uses an external API, the project will be completed in a team of two within 48 hours.

A + L is the initial of the team members for this project. It also stands for art and life. This is a platform where users can search for all kinds of exhibitions or lifestyle event info. They will be able to check the event location or get redirected to the actual event page from the map. The external API used for this project is from [The LIST](https://api.list.co.uk/).

Visit the site here - [A + L](https://aichi-chang.github.io/SEI-Project-2/#/), or you can also find the GitHub repo - [GitHub](https://github.com/Aichi-Chang/SEI-Project-2)

#### Preview
![ezgif com-video-to-gif](https://media.giphy.com/media/dYs9xdL2sF4x3c4DYR/giphy.gif)


### :rocket: Get Started ###

* Clone or download the repo
* `npm init`
* `npm run serve` to start


### 📝 Brief ###

* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components** - At least one classical and one functional.
* **Include wireframes** - that you designed before building the app.
* **The app should include a router** - with several "pages".
* **Have a visually impressive design**
* **Be deployed online** and accessible to the public.

### 🕹 Technologies used ###

* HTML5
* CSS3
* JavaScript (ES6)
* React
* Mapbox
* Webpack
* Bulma
* Babel
* Insomnia
* Git
* GitHub


### ✔️ Approach Taken ###

#### Wireframes

Our app has 3 main pages which is ***Home***, ***About***, and ***Events***. 
The Events page will render all events and by clicking one of them, users will be able to check out more detailed event information. 

<img src='https://github.com/Aichi-Chang/SEI-Project-2/blob/master/src/imgs/Screenshot%202020-02-03%20at%209.39.07%20pm.png?raw=true' width='50%'>

#### Project Structure

- In order to request the correct data, it is important to read through the documentation. We spent sometime on testing the urls.

```js
  loadData() {
    axios.get(`https://api.list.co.uk/v1/events?tags=${this.state.tags}&location=london&page=${this.state.pages}`, config)
      .then(resp => this.setState({ allEvents: resp.data }))
  }
```

- Due to the API has a limitation which is only showing 20 results per page, we had to pull out the fetch function and call everytime when the user clicks the page number. This is to make the second page to load extra results.

```js
  page1(e) {
    this.setState({
      pages: e.target.innerHTML
    }, () => {
      this.loadData()
    })
  }

  page2(e) {
    this.setState({
      pages: e.target.innerHTML
    }, () => {
      this.loadData()
    })
  }
```
```js
  <div className= "has-text-centered">
    <div className="button is-white has-text-centered" onClick={(e) => this.page1(e)}>1</div>
    <div className="button is-white has-text-centered" onClick={(e) => this.page2(e)}>2</div>
  </div>
```
- For the single event page, we added the map feature using Uber's React-Map-GL(This is a suite of React components for Mapbox GL JS). By transfering the longitude and the latitude provides by the API, we will be able to pin down the event location on the map and show a popup info when users clicking it.
```js
  _renderMarker = () => {
    const { event } = this.props
    return (
      <Marker longitude={event.schedules[0].place.lng} latitude={event.schedules[0].place.lat}>
        <svg 
          style={{ 
            cursor: 'pointer',
            fill: '#FF5876' 
          }}
          onClick={() => this.setState({ info: this.props.event })} 
        >
          <path d={Icon} />
        </svg>
      </Marker> 
    )
  }

  _renderPopup() {
    const { info } = this.state

    return (
      info && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={info.schedules[0].place.lng}
          latitude={info.schedules[0].place.lat}
          closeOnClick={false}
          onClose={() => this.setState({ info: null })}
        >
          {/* <h1>hello</h1> */}
          <SingleInfo info={info}/>
        </Popup>
      )
    )
  }
```

### 🤗 Wins ###


### 🧐 Chanllenges ###

### 🔮 Future features ###




Challenges:
This is an instant duo group project after just learning React for a week. The challenge is to apply React straight away on this project, as there are a few new concepts than JavaScrip, like components, state and props… The second challenge is working in a team with another developer(we were teamed up randomly by the teaching group) The communication definitely plays an important part in the work.

Wins:
Found a great external API for the project
Applied React MapBox into the APP
Understand a high-level of React
Got more used to JavaScript and CSS
Great teamwork
