import { useContext } from 'react';
import ImdbDefault from './imdb_ratings/ImdbDefault';
import { MainContext } from '../../../providers/MainProvider';

export default () => {
  const { main, setMain } = useContext(MainContext)
  return (
    <>
      {main.model==="IMDB Ratings" && (
        <ImdbDefault />
      )}
    </>
  )
}
