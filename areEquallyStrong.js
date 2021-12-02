function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  let yourWeak;
  let yourStrong;
  let friendsWeak;
  let friendsStrong;
  if (yourLeft < yourRight) {
    yourWeak = yourLeft;
    yourStrong = yourRight;
  } else {
    yourWeak = yourRight;
    yourStrong = yourLeft;
  }
  if (friendsLeft < friendsRight) {
    friendsWeak = friendsLeft;
    friendsStrong = friendsRight;
  } else {
    friendsWeak = friendsRight;
    friendsStrong = friendsLeft;
  }
  if (yourWeak === friendsWeak && yourStrong === friendsStrong) {
    return true;
  }
  return false;
}
