

function Card({ item, isVisible, isFinished, onCardClick}) {
  
    const {id, url, description} = item
    
    const className = `${
      isVisible ? 'card-show' : ''
    } ${
      isFinished ? 'card-finished' : ''
    }`;
  
    const handleClick =() => {
      if(isFinished){
        return
      }
      onCardClick(id);
    }
    return (
      <li className={`card ${className}`} onClick = {handleClick}>
        <img
          width="204" height="144"
          src={url}
          alt={description}
        />
      </li>
    );
  }


  export default Card