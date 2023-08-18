import React from 'react';
import GamePage from './GamePage';
import ResultsPage from './ResultsPage';
import {AppRoute} from './utils/settings.js'


function App({images = [], results = []}) {
  // TODO: добавьте состояние для хранения текущего результата
  const [result, setResult] = React.useState(0)
  // TODO: добавьте состояние для хранения страницы приложения
  const [page, setPage] = React.useState(AppRoute.Game);
  
  const showResults = (wordsCount) => {
    setResult(wordsCount)
    setPage(AppRoute.Results)
  }

  const handleReset = () => {
    setPage(AppRoute.Game)
  }
  const getPage = (route) => {
    switch (route) {
      case AppRoute.Game:
        return (
          <GamePage 
            images={images} 
            onShowResults={showResults}
          />
        );
      case AppRoute.Results:
        return (
          <ResultsPage 
            results = {results} 
            current = {result} 
            onResetGame={handleReset} 
          />
        );
      default:
        return null  
    }
  }


  return getPage(page)
}

export default App;
