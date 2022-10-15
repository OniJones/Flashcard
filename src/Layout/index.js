import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import View from "./Home/View";
import Study from "./Home/Study";
import CreateDeck from "./Home/CreateDeck";
import EditDeck from "./Home/EditDeck";
import AddCard from "./Home/AddCard";
import EditCard from "./Home/EditCard";

function Layout() {
  const [ decks, setDecks ] = useState([]);
  const [ cards, setCards ] = useState([]);




  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <View
              cards={cards}
              setCards={setCards} />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study
              cards={cards}
              setCards={setCards} />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route exact path="/">
            <Home 
              decks={decks}
              setDecks={setDecks} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
