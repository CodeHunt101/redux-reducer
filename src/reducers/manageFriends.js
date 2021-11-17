export function manageFriends(state = {friends:[]}, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const copyOfFriends = [...state.friends]
      const friendToRemoveIndex = copyOfFriends.indexOf(copyOfFriends.find(friend => friend.id === action.id))
      copyOfFriends.splice(friendToRemoveIndex, 1)
      return {friends: copyOfFriends}
    default:
      return state
  }
}
