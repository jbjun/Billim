// import { useState, useRef, useEffect } from "react";
// import styled from "@mui/material/styles/styled";
// import ListItem, { ListItemProps } from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";

// const SlideListItem = styled(ListItem)<{ showButton: boolean } & any>(
//   ({ showButton }) => ({
//     position: "relative",
//     left: showButton ? -40 : 0,
//     transition: "left 0.2s ease-in-out",
//   })
// );

// interface SlideListItemProps extends ListItemProps {
//   children?: React.ReactNode;
// }

// const SlideableListItem = ({ children, ...props }: SlideListItemProps) => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [isShowButton, setIsShowButton] = useState(false);
//   const [dragDistance, setDragDistance] = useState(0);
//   const listItemRef = useRef<HTMLDivElement | null>(null);
//   const startPosition = useRef(0);

//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     setIsDragging(true);
//     startPosition.current = e.clientX;
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!isDragging) return;
//     const newPosition = e.clientX;
//     setDragDistance(newPosition - startPosition.current);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     if (dragDistance < -40) {
//       setIsShowButton(true);
//     } else {
//       setIsShowButton(false);
//     }
//   };

//   useEffect(() => {
//     if (!listItemRef.current) return;
//     if (isDragging) {
//       listItemRef.current.style.cursor = "grabbing";
//     } else {
//       listItemRef.current.style.cursor = "default";
//     }
//   }, [isDragging]);

//   return (
//     <SlideListItem
//       ref={listItemRef}
//       showButton={isShowButton}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={() => setIsDragging(false)}
//       sx={{ px: 2 }}
//       {...props}
//     >
//       {children}
//       <ListItemButton sx={{ visibility: isShowButton ? "visible" : "hidden" }}>
//         Button
//       </ListItemButton>
//     </SlideListItem>
//   );
// };

// export default SlideableListItem;
