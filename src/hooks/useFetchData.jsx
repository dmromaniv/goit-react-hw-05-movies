const { useEffect, useState } = require('react');

export function useFetchData(callback) {
  const [data, setData] = useState(null);
  const [isLoading, setLoadingStatus] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoadingStatus(true);
        const data = await callback();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingStatus(false);
      }
    };
    getData();
  }, [callback]);

  return { data, isLoading };
}
