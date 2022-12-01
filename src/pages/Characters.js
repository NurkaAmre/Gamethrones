import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import s from './Characters.module.css';

const Characters = () => {
  const [search, setSearch] = useState('');
  const characters = useSelector((state) => state.characters.characters);
  const status = useSelector((state) => state.characters.status);

  const showChar = () => {
    if (status === 'loading') {
      return <div><p className="message">Loading...</p></div>;
    }
    if (status === 'failed') {
      return <div><p className="failMessage">Sorry, Try again later</p></div>;
    }
    return (
      <ul className={s.Grid}>
        {// eslint-disable-next-line consistent-return, array-callback-return
          characters.filter((val) => {
            if (search === '') {
              return val;
            } if (val.fullName.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          }).map((character, index) => (
            <NavLink
              key={character.id}
              to={{
                pathname: '/character/characterdetails',
                search: character.fullName,
              }}
              state={character}
            >
              <li id={index} className={s.characterContainer} aria-hidden="true">
                <p id={index} className={s.characterName}>{character.fullName}</p>
                <img
                  id={index}
                  key={character.id}
                  src={character.imageUrl}
                  alt={`${character.lastName}`}
                  height="200"
                  width="250"
                  className={s.img}
                />
              </li>
            </NavLink>
          ))
        }
      </ul>
    );
  };

  return (
    <main>
      <Hero />
      <input type="text" placeholder="Search characters" className={s.search} onChange={(e) => setSearch(e.target.value)} />
      <section>
        <section className={s.characters}>
          {showChar()}
        </section>
      </section>
    </main>
  );
};

export default Characters;