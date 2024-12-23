import { useMemo } from "react";

const useChunks = <T,>(array: T[], size: number): T[][] =>
  useMemo(() => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }, [array, size]);

export default useChunks;
