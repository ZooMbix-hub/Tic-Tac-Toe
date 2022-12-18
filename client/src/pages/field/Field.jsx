import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextAuth } from '../../App';
import { Board, Chat, ListPlayers, Motion } from '../../components';
import './FieldStyle.scss';
import './FieldAdaptive.scss';

const Field = () => {
  const { userProfile, playersRoom, joinedRoom, isDesktop } = useContext(ContextAuth);
  const [xIsNext, setXIsNext] = useState(true);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    playersRoom.forEach((player) => {
      if(player.login === userProfile.login) {
        setProfile(player);
      }
    });
  }, [playersRoom]);

  useEffect(() => {
    const motion = playersRoom[0]?.login === profile?.login ? true : false;
    setXIsNext(motion);
  }, [profile]);

  return (
    <div className='field-wrapper'>
      {joinedRoom ? 
        <div className='field-container'>
          <div className='field-games'>
            <div className='one'>
              <ListPlayers playersArr={playersRoom}/>
            </div>

            <div className='two'>
              <Board xIsNext={xIsNext} setXIsNext={setXIsNext} playersArr={playersRoom} profile={profile} />
            </div>
                    
            <div className='three'>
              <Chat portfolio={profile} />
            </div>
          </div>
          {isDesktop && <Motion xIsNext={xIsNext} playersArr={playersRoom} profile={profile}/>}
        </div>
        :
        <div className='clear-field'>
          <p>Необходим игрок</p>
          <button 
            className='btnInvite-activePlayer' 
            onClick={() => navigate('/activePlayers')}
          >
            Пригласить игрока
          </button>
        </div>}
    </div>
  );
};

export default Field;