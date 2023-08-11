import React from 'react'

import MostViewed from '../../components/MostViewed/MostViewed'
import Card from '../az-list/Card'
import Header from '../../components/NavBar/NavBa'
import ALLGenres from '../../components/Genres/AllGenres'

const Movies = () => {

  return (
    <div>
      <Header />
      <h1>movies</h1>
      <div className=" w-full flex">
        <div className=" w-9/12">
          <Card targetType={"Movie"} />
        </div>
        <div className=' w-3/12'>
        <MostViewed />
        <ALLGenres />
        </div>
      </div>
    </div>
  );
}

export default Movies