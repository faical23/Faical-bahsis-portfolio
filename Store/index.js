
export default function LangStore(state = "En", action) {
    switch (action.type) {
    case 'SET_LANG':
        var Lang =action.payload
        return {Lang};
    case 'CLEAR_LANG':
        var Lang =action.payload
        return {Lang};
    default:
        return state
    }
  }