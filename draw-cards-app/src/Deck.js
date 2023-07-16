import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import "./Deck.css";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";
// Deck: uses deck of cards API, allows drawing one card at a time. 

function Deck() {
  const [deck, setDeck] = useState(null);
  const [drawn, setDrawn] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(function loadDeckFromAPI() {
    async function fetchData() {
      const newDeck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
      setDeck(newDeck.data);
    }
    fetchData();
  }, []);


  // Draw card: changes state & effect will begin. 
  async function draw() {
    try {
      const res = await axios.get(`${API_BASE_URL}/${deck.deck_id}/draw/`);
      if (res.data.remaining === 0) throw new Error("Deck empty!");
      const card = res.data.cards[0];

      setDrawn(d => [
        ...d,
        {
          id: card.code,
          name: card.suit + " " + card.value,
          image: card.image,
        },
      ]);
    } catch (error) {
      alert(error);
    }
  }

  // Shuffle: change state & effect will begin. 
  async function startShuffling() {
    setIsShuffling(true);
    try {
      await axios.get(`${API_BASE_URL}/${deck.deck_id}/shuffle/`);
      setDrawn([]);
    } catch (error) {
      alert(error);
    } finally {
      setIsShuffling(false);
    }
  }

  // Return draw button (disabled if shuffling) 
  function renderDrawBtnIfOk() {
    if (!deck) return null;

    return (
      <button
        className="Deck-gimme"
        onClick={draw}
        disabled={isShuffling}>
        DRAW CARD!
      </button>
    );
  }

  // Return shuffle button 
  function renderShuffleBtnIfOk() {
    if (!deck) return null;
    return (
      <button
        className="Deck-gimme"
        onClick={startShuffling}
        disabled={isShuffling}>
        SHUFFLE THE DECK!
      </button>
    );
  }

  return (
    <main className="Deck">

      {renderDrawBtnIfOk()}
      {renderShuffleBtnIfOk()}

      <div className="Deck-cardarea">{
        drawn.map(card => (
          <Card key={card.id} name={card.name} image={card.image} />
        ))}
      </div>

    </main>
  );
}

export default Deck;
