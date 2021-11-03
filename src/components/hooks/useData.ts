import axios from "axios";
import { useEffect, useState } from "react";

export const useData = (filename: string): [string, boolean] => {
  const [loading, setLoading] = useState<boolean>(true);
  const [markdown, setMarkdown] = useState<any>("");

  const checkCache = (f: string): string | null => {
    const cachedData = window.localStorage.getItem(f);
    if (cachedData) {
      return cachedData;
    }
    return null;
  };

  const fileFetch = async () => {
    try {
      const { data }: { data: string } = await axios.get(
        `sections/${filename}`
      );
      const regexedData = data.replace(/---([^;]*)---/g, "");
      setLoading(false);
      setMarkdown(regexedData);
      window.localStorage.setItem(filename, regexedData);
    } catch {
      setLoading(false);
      setMarkdown("");
    }
  };

  // eslint-disable-next-line
  useEffect(() => {
    const cache = checkCache(filename);
    if (cache) {
      setLoading(false);
      setMarkdown(cache);
    }
    fileFetch();
  });

  return [markdown, loading];
};
