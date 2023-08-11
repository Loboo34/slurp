import React from 'react'
import Header from '../../components/NavBar/NavBa';
import Card from '../az-list/Card';
import MostViewed from '../../components/MostViewed/MostViewed';
import ALLGenres from '../../components/Genres/AllGenres';

const TvSeries = () => {
  return (
    <div>
      <Header />
      <h1>movies</h1>
      <div className=" w-full flex">
        <div className=" w-9/12">
          <Card targetType={"Tv"} />
        </div>
        <div className=" w-3/12">
          <MostViewed />
          <ALLGenres />
        </div>
      </div>
    </div>
  );
}

export default TvSeries