import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../../utils/api";
import Deck from "./Deck";

export default function Home({ decks, setDecks }) {
    useEffect(() => {
        const abortController = new AbortController();

        async function fetchDecks() {
            const decksData = await listDecks(abortController.signal);
            setDecks(decksData);
        }
        fetchDecks();
    }, []);

    const deckList = decks.map((deck) => <Deck deck={deck} />);

    return (
        <div>
            <div className="actions">
                <Link to="/decks/new">
                    <button className="btn btn-secondary">
                        <span className="oi oi-plus mr-2"></span>
                        Create Deck
                    </button>
                </Link>
            </div>

            <div>{deckList}</div>
        </div>
    );
}
