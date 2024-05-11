import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";


const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/rooms`)
        setCards(data)
      }
      getData()
    }, [])
    return (
        <div>
            <div>
                <h2 className="font-bold  text-5xl text-center mt-10 mb-5">Featured Rooms</h2>

            </div>
            <div className="grid grid-rows-1 lg:grid-cols-3 gap-8">
                {
                    cards.slice(0,6).map(card => <Card key={card.room_id} card={card}></Card>)

                }
            </div>
        </div>
    );
};

export default Cards;