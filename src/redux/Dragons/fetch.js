/* eslint-disable no-param-reassign */
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCharacters = createAsyncThunk(('fetchCharacters'), async () => {
  const url = 'https://thronesapi.com/api/v2/Characters';
  const data = await fetch(url);
  const json = await data.json();
  return json;
});

export default fetchCharacters;