import { createSlice } from '@reduxjs/toolkit'
import { POMODORO, SHORT_BREAK, LONG_BREAK } from '../../constant'
import { reduxState } from '../../interface/appinterface'
const initialState: reduxState = {
         mode: POMODORO,
         round: 0,
         longBreakInterval: 1,
         modes: {
                  [POMODORO]: {
                           id: POMODORO,
                           label: "Pomodoro",
                           time: 1,
                           color:'#FCA5A5'
                  },
                  [SHORT_BREAK]: {
                           id: SHORT_BREAK,
                           label: "Short Break",
                           time: 2,
                           color:'#397097'
                  },
                  [LONG_BREAK]: {
                           id: LONG_BREAK,
                           label: "Long Break",
                           time: 3,
                           color:'#518A58'
                  },
         },
         settingsopen:false
}

const timerSlice = createSlice({
         name: 'timer',
         initialState,
         reducers: {
                  setMode: (state, action) => {
                           state.mode = action.payload
                  },
                  increaseRound: (state) => {
                           state.round += 1;
                  },
                  updateModeTime: (state, action: { payload: { mode: string; time: number } }) => {
                           const { mode, time } = action.payload;
                           state.modes[mode].time = time;
                  },
                  setLongBreakInterval: (state, action: { payload: number }) => {
                           state.longBreakInterval = action.payload
                  },
                  opensettings:(state)=>{
                      state.settingsopen= !state.settingsopen
                  },
                  resetrounds:(state)=>{
                    state.round=0
                  }
         }
})

export default timerSlice.reducer;
export const { setLongBreakInterval, setMode, updateModeTime, increaseRound ,opensettings,resetrounds} = timerSlice.actions