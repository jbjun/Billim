// 외부모듈
import { ReactNode, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";

// wip...
const useDialog = () => {
  const [open, setOpen] = useState(false);

  const openDialog = ({ contents }: { contents: ReactNode }) => {
    const $portal = document.getElementById("portal");
    if (!contents || !$portal) return null;

    ReactDOM.createPortal(contents, $portal);
  };

  const closeDialog = () => {
    const $portal = document.getElementById("portal");
    if (!$portal) return null;

    ReactDOM.createPortal(null, $portal);
  };

  return { openDialog, closeDialog };
};

export default useDialog;
