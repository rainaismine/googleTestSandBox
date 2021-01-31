import React, { Component } from "react";
import AdSense from "react-adsense";
import { render } from "react-dom";
import {
  Advertisement,
  Container,
  Divider,
  Header,
  Icon,
  Message
} from "semantic-ui-react";

class BasicAd extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        data-ad-client="ca-pub-4591861188995436"
        data-ad-slot="4640466102"
        style={{ display: "inline-block", height: 250, width: 300 }}
      />
    );
  }
}

const App = () => (
  <Container>
    <Divider hidden />
    <Message info>
      <Message.Header>Semantic UI React with GoogleAds</Message.Header>
      <p>
        An example of usage GoogleAds with Advertisement component from Semantic
        UI React.
      </p>
      <Message.List>
        <Message.Item>
          Please make sure that you have included GoogleAds code:
          <br />
          <code
            style={{ fontSize: 10 }}
          >{`<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>`}</code>
        </Message.Item>
        <Message.Item>Also you need to disable your ad blocker 😁</Message.Item>
      </Message.List>
    </Message>

    <Header as="h3">
      <Icon name="thumb tack" />A basic example
    </Header>
    <Advertisement unit="medium rectangle">
      <BasicAd />
    </Advertisement>

    <Header as="h3">
      <p>
        <Icon name="thumb tack" />
        With{" "}
        <a href="https://www.npmjs.com/package/react-adsense">react-adsense</a>
      </p>
    </Header>
    <Advertisement unit="leaderboard">
      <AdSense.Google
        client="ca-pub-4591861188995436"
        format=""
        slot="6710577704"
        style={{ display: "inline-block", height: 90, width: 728 }}
      />
    </Advertisement>
  </Container>
);

render(<App />, document.getElementById("root"));
