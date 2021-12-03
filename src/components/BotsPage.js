import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = "http://localhost:8002/bots";

function BotsPage() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setBots);
  }, []);

  function enlistBot(bot, isEnlist = true) {
    setBots(
      bots.map((b) => (b.id === bot.id ? { ...b, enlist: isEnlist } : b))
    );
  }
  function removeBot(bot) {
    enlistBot(bot, false);
  }
  function dischargeBot(bot) {
    setBots(bots.filter((b) => b.id !== bot.id));
  }

  return (
    <div>
      <YourBotArmy bots={bots.filter((b) => b.enlist)}
      removeBot={removeBot}
      dischargeBot={dischargeBot}
      />
      <BotCollection
        bots={bots}
        enlistBot={enlistBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default BotsPage;
