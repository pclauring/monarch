import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { MonsterService } from "../../services/MonsterService";

type Status = "idle" | "loading" | "failed";

export interface MonsterState {
  monsters: IMonster[];
  status: Status;
}

const initialState: MonsterState = {
  monsters: [],
  status: "idle",
};

//Init Service
const baseUrl: string = "http://localhost:7000";
const monsterService = new MonsterService(
  baseUrl,
  process.env.REACT_APP_AUTH0_AUDIENCE
);

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getMonstersAsync = createAsyncThunk(
  "monster/getMonsters",
  async () => {
    const response = await monsterService.getMonster();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const monsterSlice = createSlice({
  name: "monster",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addMonster: (state, action: PayloadAction<IMonster>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.monsters.push(action.payload);
    },
    updateMonster: (state, action: PayloadAction<IMonster>) => {
      var index = state.monsters.findIndex(
        (monster) => monster._id === action.payload._id
      );
      state.monsters.splice(index, 1, action.payload);
    },
    removeMonster: (state, action: PayloadAction<IMonster>) => {
      state.monsters = state.monsters.filter(
        (monster) => monster._id !== action.payload._id
      );
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getMonstersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMonstersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.monsters = action.payload.data;
      })
      .addCase(getMonstersAsync.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

export const { updateStatus, addMonster, removeMonster, updateMonster } =
  monsterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMonsters = (state: RootState) => state.monster.monsters;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default monsterSlice.reducer;
