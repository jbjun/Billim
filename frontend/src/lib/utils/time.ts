import { IFirestoreTimestamp } from "@type/firebase";

export const firestoreTimestampToDate = (timestamp: IFirestoreTimestamp) => {
  if (
    timestamp &&
    typeof timestamp === "object" &&
    timestamp.hasOwnProperty("_seconds")
  ) {
    return new Date(timestamp._seconds * 1000);
  } else {
    throw new Error("Invalid timestamp format");
  }
};
