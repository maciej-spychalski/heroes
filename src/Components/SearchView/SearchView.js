import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchHeroesByName } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Loader/Loader';
import './SearchView.css';

function SearchView() {
  const [searchList, setSearchListContents] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    searchHeroesByName(name).then(searchResults => {
      const { data } = searchResults;

      if (data.error) {
        return;
      }

      const { results } = data;
      setSearchListContents(results);
      setLoadingState(false);
    })
  }, [name]);

  return (
    <>
      {!isLoading &&
        (
          <section className='search'>
            {/* {searchList.map(() => <HeroSimplified />)} */}
            {searchList.map(({ powerstats, image, name, id }) => <HeroSimplified key={id} powerstats={powerstats} imgUrl={image.url} name={name} id={id} />)}
          </section>
        )
      } {
        isLoading && <Loader />
      }
    </>
  );
}

export default SearchView;
