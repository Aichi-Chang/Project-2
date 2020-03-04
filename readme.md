### ![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)


### 🚩 Project-2 - A + L (Pair Coding Project) ###
The second project of the software engineering immersive course at GA London is a small Hackathon(Reacathon). The assignment was to build a React app that uses an external API, the project will be completed in a team of two within 48 hours.

A + L is the initial of the team members for this project. It also stands for art and life. This is a platform where users can search for all kinds of exhibitions or lifestyle event info. They will be able to check the event location or get redirected to the actual event page from the map. The external API used for this project is from [The LIST](https://api.list.co.uk/).

Visit the site here - [A + L](https://aichi-chang.github.io/SEI-Project-2/#/), or you can also find the GitHub repo - [GitHub](https://github.com/Aichi-Chang/SEI-Project-2)

#### Preview
![ezgif com-video-to-gif](https://media.giphy.com/media/dYs9xdL2sF4x3c4DYR/giphy.gif)


### :rocket: Get Started ###

* Clone or download the repo
* `npm install`
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

- Due to the API has a limitation which is only showing 20 results per page, we had to pull out the fetch function and call every time when the user clicks the page number. This is to make the second page to load extra results.

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
- For the single event page, we added the map feature using Uber's React-Map-GL(This is a suite of React components for Mapbox GL JS). By transferring the longitude and the latitude provides by the API, we will be able to pin down the event location on the map and show popup info when users clicking it.
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
- Practiced how to retrieve data from an API, and understand better how API works
- Successfully added React Mapbox to the project
- Get more used to writing React, JavaScript and CSS
- I learned a lot from pair coding with my teammate. We have had a fun time working together.

### 🧐 Chanllenges ###

- We have only learned React for one week and a half before assigning this project. While working on the project, I had to go through React documentation, read, learn, and code at the same time. It's the same experience for the Mapbox as well. It was challenging but I'm happy that I have completed.
- Working in a team with another developer(we were teamed up randomly by the teaching group) The communication definitely plays an important role in the work.

### 🔮 Future features ###

- Add comment feature
- Add register and login feature
- Logged in users will be able to purchase tickets on our app, and the tickets will be saved as a QR code in the users' device.

