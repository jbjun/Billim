import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
function SlidableList({ children }: any) {
  return <SwipeableList type={Type.IOS}>{children}</SwipeableList>;
}

export default SlidableList;
