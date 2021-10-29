import axios from "axios";
import { useEffect, useState } from "react";

export const useData = (filename: string): [string, boolean] => {
  const [loading, setLoading] = useState<boolean>(true);
  const [markdown, setMarkdown] = useState<any>("");

  const fileFetch = async () => {
    try {
      const { data } = await axios.get(`${filename}`);
      setLoading(false);
      setMarkdown(data);
    } catch {
      setLoading(false);
      setMarkdown("");
    }
  };

  useEffect(() => {
    fileFetch();
  });

  return [markdown, loading];
};
