import React from 'react'

import { CharacterType, fetchCharacter } from './misc/characters';

import Loading from './misc/Loading';
import { CharacterInformaton } from "./misc/CharacterInformation";

function USNoDefaultValueMovieChar() {

  const [character, setCharacter] = React.useState<CharacterType | null>(null)
  const [loading, setLoading] = React.useState(true)

  // simulating a slow network
  React.useEffect(() =>{
    setTimeout(() =>
      fetchCharacter().then(c => {
        setCharacter(c);
        setLoading(false)
      }),
      2000)
  },[])
  return (
    <main>
      { /* Wont Work
        loading && !character ? <Loading />: <CharacterInformaton character={character} /> */}

      { loading && <Loading />}
      {character && <CharacterInformaton character={character} />}
    </main>
  )
}

export default USNoDefaultValueMovieChar