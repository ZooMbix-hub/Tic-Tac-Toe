import React from 'react';
import AnimateModal from './animate/AnimateModal';
import ModalWinner from './winner/ModalWinnerDraw';
import ModalAddFriend from './addFriend/ModalAddFriend';

const ModalWindow = (props) => {
  const {
    view
  } = props;

  /* switch (view) {
    case 'winner':
      return <ModalWinner />    
    case 'added':
      return <ModalAddFriend />
  } */
  
  return (
    <AnimateModal>
      <div>ModalWindow</div>
    </AnimateModal>
  );
};

export default ModalWindow;