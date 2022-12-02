/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchCharacters from './fetch';

const charSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    status: 'idle',
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchCharacters.fulfilled, (state, action) => {
      state.characters = action.payload.map((character) => ({
        id: character.id,
        firstName: character.firstName,
        lastName: character.lastName,
        fullName: character.fullName,
        title: character.title,
        family: character.family,
        image: character.image,
        imageUrl: character.imageUrl,
      }));
    })
    .addCase(fetchCharacters.rejected, (state) => {
      state.status = 'failed';
    })
  },
});

export default charSlice.reducer;
