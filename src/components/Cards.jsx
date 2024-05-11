import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Cards = () => {
          const cards = useLoaderData();
       console.log(cards)

    return (
        <div>
            <div>
                <h2 className="font-bold  text-5xl text-center mt-10 mb-5">Featured Rooms</h2>

            </div>
            <div className="grid grid-rows-1 lg:grid-cols-3 gap-8">
                {
                    cards.map(card => <Card key={card.room_id} card={card}></Card>)

                }
            </div>
        </div>
    );
};

export default Cards;