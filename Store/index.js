
export default function LangStore(state = "En", action) {
    switch (action.type) {
    case 'SET_LANG':
        var Lang = action.payload
        // console.log("state => " ,Lang)
        return{state,Lang}
    case 'CLEAR_LANG':
        var LangPay = action.payload
        return{state,LangPay}
    default:
        return state
    }
  }