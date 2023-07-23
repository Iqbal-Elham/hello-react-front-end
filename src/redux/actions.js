import axios from 'axios';

export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/random_greeting');
    const greeting = response.data.greeting;
    dispatch({ type: 'SET_GREETING', payload: greeting });
  } catch (error) {
    console.error('Error fetching random greeting:', error);
  }
};