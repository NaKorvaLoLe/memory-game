import React from 'react';
import Progress from './Progress.js';
import Modal from './Modal.js';
import Grid from './Grid.js';

const useGame = (images) => {
  const [finishedItems, setFinishedItems] = React.useState([]);
  const [stepsCount, setStepsCount] = React.useState(0)
  
  const checkItems = (firstItem, secondItem) =>{
    const firstWord = images.find(({id}) => id === firstItem);
    const secondWord = images.find(({id}) => id === secondItem);
    if(firstWord.url === secondWord.url){
      setFinishedItems((items) => [...items, firstItem, secondItem]);
    }
    setStepsCount((i) => i + 1);
  }

  const handleReset = () => {
    setFinishedItems([]);
    setStepsCount(0);
  }

  const isWin = finishedItems.length > 0 && finishedItems.length === images.length;

  
  return {
    finishedItems,
    handleReset,
    stepsCount,
    checkItems,
    isWin,
  }
}

function App({images = []}) {
  // TODO: добавьте состояние для счётчика шагов
  const  {
    finishedItems,
    checkItems,
    stepsCount,
    handleReset,
    isWin,
  } = useGame(images)

  return (
    <section className="game container">
      <Progress 
        value={finishedItems.length/2} 
        max={images.length/2} 
      />
      <div className="steps">Шаг {stepsCount}</div>
      <Grid 
        images={images}
        finishedItems={finishedItems}
        checkItems={checkItems}
      />
      {isWin && (
        <Modal>
          <h3 className="modal-caption">Победа!</h3>
          <p className="modal-description">Вы собрали все пары за {stepsCount} шагов</p>
          <button onClick={handleReset} className="button modal-button" type="button">Новая игра</button>
        </Modal>
      )}
    </section>
  );
}

export default App;
