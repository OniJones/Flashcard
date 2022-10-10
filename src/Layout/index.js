import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";

import Study from "./Home/Study";





function Layout() {
  const [ decks, setDecks ] = useState([]);
  const [ cards, setCards ] = useState([]);




  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}

        <Switch>
          <Route exact path="/">
            <Home 
              decks={decks}
              setDecks={setDecks} />
          </Route>
          <Route exact path="/decks/new">
            {/* <CreateDeck /> */}
          </Route>
          <Route exact path="/decks/:deckId">
            {/* <View
              cards={cards}
              setCards={setCards} /> */}
          </Route>
          <Route exact path="/decks/:deckId/edit">
            
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study
              cards={cards}
              setCards={setCards} />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
