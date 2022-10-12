import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NotEnoughCards from './NotEnoughCards';

export default function CardStudy({ selectedDeck }) {
    const { cards } = selectedDeck;

    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ front, setFront ] = useState(true);
    const history = useHistory();

    const flipButtonHandler = () => {
        setFront(!front);
    };

    const nextButtonHandler = () => {
        if (currentIndex < cards.length -1) {
            setCurrentIndex(currentIndex + 1);
            setFront(true);
        } else {
            if (
                window.confirm(
                    "Restart cards?\n\n Click 'Cancel' to return to Home Page",
                )
            ) {
                setCurrentIndex(0);
                setFront(true);
            } else {
                history.push('/');
            }
        }
    };

    if (cards.length <= 2) {
        return <NotEnoughCards cards={cards} />;
    }

  return (
    <div>
      <div className='card' style={{ width: "45rem" }}>
        <div className='card-body'>
            <h5 className='card-title'>
                Card {currentIndex +1} of {cards.length}
            </h5>
            <p className='card-text'>
                {front ? cards[currentIndex].front : cards[currentIndex].back}
            </p>
            <button
                type="button"
                className='btn btn-secondary'
                onClick={flipButtonHandler}
            >
                Flip
            </button>
            {!front ? (
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={nextButtonHandler}
                >
                    Next
                </button>
            ) : null}
        </div>
      </div>
    </div>
  );
}
