import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Quotes />
      </div>
    );
  }
}

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: ""
    };
    this.generateIndex = this.generateIndex.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
    this.loadQuote = this.loadQuote.bind(this);
  }
  componentDidMount() {
    this.loadQuote();
  }
  loadQuote() {
    this.setState({
      randomIndex: Math.floor(Math.random() * 14)
    });
  }
  generateIndex() {
    this.generateAnimation();
    setTimeout(
      () =>
        this.setState({
          randomIndex: Math.floor(Math.random() * 14)
        }),
      1000
    );
  }
  generateAnimation() {
    document.getElementById("text").setAttribute("class", "cool");
    document.getElementById("author").setAttribute("class", "cool");
    setTimeout(
      () => document.getElementById("text").removeAttribute("class", "cool"),
      2000
    );
    setTimeout(
      () => document.getElementById("author").removeAttribute("class", "cool"),
      2000
    );
  }

  tweetQuote() {
    const quoteBank = [
      "You understand, don't you? There's no other solution. You won't go away.",
      "I'm on vacation!! This isn't an appointment, I'm stopping by!",
      "It'll probably be just a short interview anyway. Just me and the family, and...my book.",
      "So you're saying, I didn't leave my wife because she liked Neal Diamond but maybe...maybe she left me?",
      "If I fake it, then I don't have it.",
      "Oh, Fay, this is so scrumptious. Is this hand-shucked?",
      "Have a great vacation family!...me too.",
      "Dr. Marvin, how's the weather up there? How's your brood? Y'all gettin' a chance to relax?",
      "The book is 'Baby Steps'. The author is Dr. Leo Marvin. And we've been talking with Bob Wiley...pretty impressive stuff Bob.",
      "Getouttathecahhhhhhh",
      "Ohh the fish.",
      "That was in my office. In my home, I'd like you to call me Dr. Marvin.",
      "It's just kids being kids.",
      "Dr. Marvin, guess what? Ahoy, I sail, I'm a sailor, I sail! "
    ];

    const quote = quoteBank[this.state.randomIndex];

    document
      .getElementById("tweet-quote")
      .setAttribute("href", `https://twitter.com/intent/tweet?text=${quote}`);
  }

  handleScroll() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  render() {
    window.onscroll = this.myFunction;

    const quoteBank = [
      "You understand, don't you? There's no other solution. You won't go away.",
      "I'm on vacation!! This isn't an appointment, I'm stopping by!",
      "It'll probably be just a short interview anyway. Just me and the family, and...my book.",
      "So you're saying, I didn't leave my wife because she liked Neal Diamond but maybe...maybe she left me?",
      "If I fake it, then I don't have it.",
      "Oh, Fay, this is so scrumptious. Is this hand-shucked?",
      "Have a great vacation family!...me too.",
      "Dr. Marvin, how's the weather up there? How's your brood? Y'all gettin' a chance to relax?",
      "The book is 'Baby Steps'. The author is Dr. Leo Marvin. And we've been talking with Bob Wiley...pretty impressive stuff Bob.",
      "Getouttathecahhhhhhh",
      "Ohh the fish.",
      "That was in my office. In my home, I'd like you to call me Dr. Marvin.",
      "It's just kids being kids.",
      "Dr. Marvin, guess what? Ahoy, I sail, I'm a sailor, I sail! "
    ];

    const quoteAuthors = [
      "Dr. Leo Marvin",
      "Bob Wiley",
      "Dr. Leo Marvin",
      "Bob Wiley",
      "Bob Wiley",
      "Bob Wiley",
      "Bob Wiley",
      "Bob Wiley",
      "Marie",
      "Dr. Leo Marvin",
      "Dr. Leo Marvin",
      "Dr. Leo Marvin",
      "Fay Marvin",
      "Bob Wiley"
    ];

    const quote = quoteBank[this.state.randomIndex];

    const author = quoteAuthors[this.state.randomIndex];
    return (
      <body id="body">
        <Navbar onScroll={this.handleScroll} />
        <img
          id="gma"
          alt="Bob Wiley and Dr. Marvin sitting next to each other"
          src="https://musicart.xboxlive.com/6/cfbcf4ed-0000-0000-0000-000000000009/504/image.jpg?w=1920&h=1080"
        />
        <Summary />
        <Cast />
        <h3 id="quotes-header">Best lines! (any from the movie)</h3>
        <div id="quote-box">
          <p id="text" class="quote-author">
            {quote}
          </p>
          <p id="author" class="quote-author">
            - {author}
          </p>
          <br />
          <br />
          <br />
          <a
            class="twitter-share-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/intent/tweet"
            id="tweet-quote"
            onClick={this.tweetQuote}
          >
            <button class="fa fa-twitter" />
          </a>
          <button id="new-quote" onClick={this.generateIndex}>
            New Quote
          </button>
        </div>
      </body>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="navbar">
          <a href="#navbar">Home</a>
          <a href="#cast-container">Cast</a>
          <a href="#quote-box">Quotes!</a>
          <a href="#summary">About</a>
        </div>
      </div>
    );
  }
}

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="summary-container">
        <p id="summary">
          <p id="movie-title">What About Bob?</p> is a 1991 comedy directed by
          Frank Oz, starring Bill Murray and Richard Dreyfuss. Murray plays Bob
          Wiley, an irritating patient who follows his egotistical psychiatrist
          Dr. Leo Marvin (Dreyfuss) on vacation. When the unstable Bob befriends
          the other members of Marvin's family, it pushes the doctor over the
          edge. The film is considered the funniest of all time by anyone with a
          good sense of humor.
        </p>
      </div>
    );
  }
}

class Cast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="cast-container">
        <h3 id="cast-header">Cast</h3>
        <p class="castDescription">Bill Murray as Bob Wiley</p>
        <img
          id="BobWileyImg"
          src="http://www.brostrick.com/wp-content/uploads/2017/10/sailing2.jpg"
          alt="Bill Murray as Bob Wiley"
          width="263.5"
          height="169.5"
        />
        <p class="castDescription">Richard Dreyfus as Dr. Leo Marvin</p>
        <img
          id="DrMarvinImg"
          src="https://vignette.wikia.nocookie.net/villains/images/f/f1/Dr._Leo_Marvin.jpg/revision/latest?cb=20130714173308"
          alt="Richard Dreyfus as Leo Marvin"
          width="150"
          height="223"
        />
        <p class="castDescription">Julie Hagerty as Fey Marvin</p>
        <img
          id="FeyImg"
          src="https://m.media-amazon.com/images/M/MV5BNWIwMWU2YzktOWJlNy00Y2VhLWEzM2UtMTNmZThmOTA5ZDU5XkEyXkFqcGdeQXVyMzMyODMwMTI@._V1_.jpg"
          alt="Julie Hagerty as Fey Marvin"
          width="300"
          height="168.5"
        />
        <p class="castDescription">Charlie Korsmo as Sigmund "Siggy" Marvin</p>
        <img
          id="SiggyImg"
          src="https://i.ytimg.com/vi/F5ZSyAuNMCM/hqdefault.jpg"
          alt="Charlie Korsmo as Simund Marvin"
          width="240"
          height="180"
        />
        <p class="castDescription">Kathryn Erbe as Anna Marvin</p>
        <img
          id="AnnaImg"
          src="https://moviereviewtheblog.files.wordpress.com/2014/04/bangs2.jpg"
          alt="Kathryn Erbe as Anna Marvin"
          width="306.5"
          height="189.5"
        />
        <p class="castDescription">Tom Aldredge as Mr. Guttman</p>
        <img
          id="MrGutmanImg"
          src="https://i.ytimg.com/vi/nb1b5DZ3LtY/hqdefault.jpg"
          alt="Tom Aldredge as Mr.Guttman"
          width="240"
          height="180"
        />
        <p class="castDescription">Susan Willis as Mrs. Guttman</p>
        <img
          id="MrsGutmanImg"
          src="https://i.ytimg.com/vi/yLfpAPAZP30/maxresdefault.jpg"
          alt="Susan Willis as Mrs. Guttman"
          width="320"
          height="180"
        />
      </div>
    );
  }
}

export default App;
