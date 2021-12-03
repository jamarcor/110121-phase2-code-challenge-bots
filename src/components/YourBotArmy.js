import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, dischargeBot, removeBot }) {
  console.log(bots)
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot) => (
            <BotCard 
            key={bot.id}
            bot={bot}
            handleClick={removeBot}
            dischargeBot={dischargeBot}
            />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
