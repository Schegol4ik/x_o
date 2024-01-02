import React, {useState} from 'react';
import Border from "./components/border/Border";
import Players from "./components/players/Players";

const App = () => {

    const [players, setPlayers] = useState({
        firstPlayer: '',
        secondPlayer: ''
    })

    const addPlayers = (name) => {
        !players.firstPlayer
            ? setPlayers({firstPlayer: name, secondPlayer: ''})
            : setPlayers({firstPlayer: players.firstPlayer, secondPlayer: name})
    }


    return (
        <div>
            <Border/>
            <Players players={players} addPlayers={addPlayers}/>
            p1 = {players.firstPlayer}
            <hr/>
            p2 = {players.secondPlayer}
        </div>
    );
};

export default App;