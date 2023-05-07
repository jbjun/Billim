import React, { useEffect, useLayoutEffect, useState } from "react";

// props가 변하면 state도 변경 - 값 동기화
function useStateFromProp(prop: any) {
  const [value, setValue] = useState(prop);

  useLayoutEffect(() => {
    setValue(() => prop);
  }, [prop]);

  return [value, setValue];
}

export default useStateFromProp;
