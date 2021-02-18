import { useState, useEffect } from 'react';

export const useWs = ({ url }) => {
  const [data, setData] = useState(null);

  const [send, setSend] = useState(() => () => undefined);

  const [readyState, setReadyState] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log('Connected to socket');
      setReadyState(true);

      setSend(() => (data) => {
        try {
          const d = JSON.stringify(data);
          ws.send(d);
          return true;
        } catch (err) {
          return false;
        }
      });

      ws.onmessage = (event) => {
        const msg = formatMessage(event.data);
        setData({ message: msg });
      };
    };

    ws.onclose = () => {
      setReadyState(false);
    };

    return () => {
      ws.close();
    };
  }, [url]);

  return { send, data, readyState };
};

const formatMessage = (data) => {
  try {
    const parsed = JSON.parse(data);
    return parsed;
  } catch (err) {
    return data;
  }
};
