import { useLocation } from "react-router";

export default function useQueryString(targets: string[] = []) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const result = targets.reduce((result, key) => {
    const value = searchParams.get(key);
    result[key] = value;

    return result;
  }, {} as any);

  return result;
}
