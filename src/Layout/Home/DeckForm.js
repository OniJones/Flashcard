import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createDeck, updateDeck } from "../../utils/api";

export default function DeckForm({
	editDesc = "",
	editName = "",
	editId = "",
	isNew,
}) {
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const newDeck = { name: name, description: desc };
	const upDeck = { name: name, description: desc, id: editId };
	const history = useHistory();

	const handleNameChange = (event) => setName(event.target.value);
	const handleDescChange = (event) => setDesc(event.target.value);

	useEffect(() => {
		setName(editName);
		setDesc(editDesc);
	}, [editName, editDesc]);

	const handleCreateSubmit = async function (event) {
		event.preventDefault();
		let result = await createDeck(newDeck);
		let deckId = result.id;
		history.push(`/decks/${deckId}`);
	};

	const handleEditSubmit = async function (event) {
		event.preventDefault();
		let result = await updateDeck(upDeck);
		let deckId = result.id;
		history.push(`/decks/${deckId}`);
	};
	return (
		<div>
			<form
				className="form-group"
				onSubmit={isNew ? handleCreateSubmit : handleEditSubmit}
			>
				<label className="col-form-label" htmlFor="deckName">
					Name
				</label>
				<input
					id="deckName"
					type="text"
					name="name"
					onChange={handleNameChange}
					className="form-control"
					value={name}
					placeholder="Deck Name"
				/>
				<br></br>
				<label htmlFor="deckDescription">Description</label>
				<textarea
					id="deckDescription"
					name="description"
					onChange={handleDescChange}
					className="form-control"
					value={desc}
					rows="3"
					placeholder="Deck Description"
				/>
				<br></br>
				<button
					className="btn btn-secondary"
					onClick={(event) => {
						event.preventDefault();
						history.go(-1);
					}}
				>
					Cancel{" "}
				</button>
				<button className="btn btn-primary ml-2" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}
