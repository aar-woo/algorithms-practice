var mergeTwoLists = function (list1, list2) {
  let mergedList;
  let remainingListCurr;
  let currNode1 = list1;
  let currNode2 = list2;
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  }
  if (list1.val < list2.val) {
    mergedList = list1;
    currNode1 = currNode1.next;
  } else {
    mergedList = list2;
    currNode2 = currNode2.next;
  }
  let mergedListCurr = mergedList;

  while (currNode1 && currNode2) {
    if (currNode1.val < currNode2.val) {
      mergedListCurr.next = currNode1;
      currNode1 = currNode1.next;
    } else {
      mergedListCurr.next = currNode2;
      currNode2 = currNode2.next;
    }
    mergedListCurr = mergedListCurr.next;
  }
  if (currNode1 === null) {
    remainingListCurr = currNode2;
  } else {
    remainingListCurr = currNode1;
  }
  while (remainingListCurr) {
    mergedListCurr.next = remainingListCurr;
    remainingListCurr = remainingListCurr.next;
    mergedListCurr = mergedListCurr.next;
  }
  console.log('remainingListCurr', remainingListCurr)
  console.log('currnode1', currNode1)
  console.log('currnode2', currNode2)
  return mergedList;
};
