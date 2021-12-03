import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, dischargeBot }) {
  // console.log(bots)
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={enlistBot}
            dischargeBot={dischargeBot}
          />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
