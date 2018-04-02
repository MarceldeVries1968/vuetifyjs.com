import Vue from 'vue'

export default {
  TRANSLATE: (state, payload) => {
    state.showBar = true
    state.currentKey = payload
  },
  SHOW_BAR: (state, payload) => {
    state.showBar = payload
  },
  REGISTER_BTN: (state, payload) => {
    state.buttons.push(payload)
  },
  UNREGISTER_BTN: (state, payload) => {
    state.buttons = state.buttons.filter(b => b.key === payload.key)
  },
  UPDATE_BTN: (state, payload) => {
    // const index = state.buttons.findIndex(b => b.uid === payload.uid)
    // Vue.set(state.buttons, index, Object.assign(state.buttons[index], { status: payload.status }))
    const btn = state.buttons.find(b => b.key === payload.key)
    state.buttons = state.buttons.filter(b => b.key !== payload.key)
    state.buttons.push(Object.assign({}, btn, { status: payload.status }))
  },
  SHOW_CREATE_DIALOG: (state, payload) => {
    state.showCreateDialog = payload
  }
}
