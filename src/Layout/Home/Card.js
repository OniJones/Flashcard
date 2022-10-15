import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { deleteCard } from "../../utils/api";

export default function Card({ card }) {
	const history = useHistory();
	const { url } = useRouteMatch();
	const cardId = card.id;

	const deleteHandler = () => {
		const abortController = new AbortController();
		window.confirm("Delete this card?\n\nYou will not be able to recover it.") ? deleteCard(cardId, abortController.signal).then(history.go("0")) : history.go("0")
	}

	return (
		<main>
			<section className="card">
				<div className="container mb-5">
					<p className="card-text">{ card.front }</p>
					<p>{ card.back }</p>
				</div>
				<div className="d-flex mb-3">
					<Link to={`${url}/cards/${cardId}/edit`}>
						<button type="button" className="btn btn-secondary mx-3">Edit</button>
					</Link>
					<button type="button" className="btn btn-danger" onClick={deleteHandler}>Delete</button>
				</div>
			</section>
		</main>
	);
}
