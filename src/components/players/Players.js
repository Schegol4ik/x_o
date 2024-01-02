import React, {useState} from 'react';
import { AiOutlineCheck } from "react-icons/ai";

const Players = ({addPlayers, players}) => {

    const [inpValue, setInpValue] = useState('')

    return (
        <div>
            {!players.firstPlayer
                ? <label htmlFor="player">Введите имя первого игрока</label>
                : <label htmlFor="player">Введите имя второго игрока</label>
            }
            <input type="text" name='player' value={inpValue} onChange={(e) => setInpValue(e.target.value)}/>
            <button onClick={() => {
                addPlayers(inpValue)
                setInpValue('')
            }}><AiOutlineCheck/></button>
        </div>
    );
};

export default Players;