// LYRIC INFO
const songLyricsArray = "Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye".split(', ');

// INITIAL REDUX STATE
const initialState = {
  songLyricsArray: songLyricsArray,
  arrayPosition: 0,
}

// REDUCER WILL GO HERE

// JEST TEST + SETUP WILL GO HERE

// REDUX STORE
const { createStore } = Redux;  // required to create Redux store
const store = createStore(reducer); // constructs a Redux store named store
console.log(store.getState()); // console logging store's state

// CLICK LISTENER
const userClick = () => {
  console.log('click');
}
