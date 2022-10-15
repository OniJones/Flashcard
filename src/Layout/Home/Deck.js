import React from "react";
import { Link, useHistory } from "react-router-dom"
import { deleteDeck } from "../../utils/api"



function Deck({ deck }){
  const history = useHistory();

  async function deleteHandler(){
      const abortController = new AbortController();
      if(
        window.confirm("Delete this deck?\n\nYou will not be able to recover it.")
      ){
        await deleteDeck(deck.id, abortController.signal)
        history.push("/")
      }
      return () => abortController.abort();
    }


    return(
        <div className="card mb-5">
            <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{deck.cards.length} cards</h6>
                <p className="card-text" style={{ flexShrink: 1 }}>{deck.description}</p>
                <Link to={`/decks/${deck.id}`} className="card-link"><button className="btn btn-secondary">View</button></Link>
                <Link to={`/decks/${deck.id}/study`} className="card-link"><button className="btn btn-primary">Study</button></Link>
                <button className="btn btn-danger ml-5" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );

}

export default Deck;
