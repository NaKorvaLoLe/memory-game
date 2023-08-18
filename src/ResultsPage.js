
function ResultsPage({results, current = 0, onResetGame}) {
  const sortedResults = [
    ...results,
    {name: 'Ваш результат', stepsCount: current,}
  ].sort((a, b) => a.stepsCount - b.stepsCount);
  const resultsRows = sortedResults.map(({name, stepsCount}, index) => (
    <tr key={name} class={`result-table-row ${stepsCount === current ? 'active' : ''}`}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{stepsCount}</td>
    </tr>
  ));

  return (
    <section className="result container">
      <h2>Лучшие результаты:</h2>
      <p>Вы завершили игру за <b>{current} шагов</b>, так держать!</p>
      <table className="result-table">
        <thead>
          <tr className="result-table-row">
            <th>Место</th>
            <th>Имя</th>
            <th>Шаги</th>
          </tr>
          </thead>
          <tbody>
            {resultsRows}
          </tbody>
        </table>
      <p>Хотите попробовать ещё раз?</p>
      <button className="button result-button" type="button" onClick={onResetGame}>Новая игра</button>
    </section>
  );
}

export default ResultsPage;