import { useEffect, useRef, useState } from 'react';

export function useArtworkChat({ artId, userName }) {
  const socketRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      name: 'System',
      message: 'Welcome to Lines of Light!',
    },
  ]);

  const [connectionStatus, setConnectionStatus] =
    useState('connecting');



  // async function loadHistory() {
  //   try {
  //     const response = await fetch(
  //       `/api/art/${encodeURIComponent(artId)}/messages`
  //     );

  //     if (!response.ok) {
  //       throw new Error(
  //         `Chat history request failed (${response.status})`
  //       );
  //     }

  //     const history = await response.json();

  //     setMessages([
  //       {
  //         name: 'System',
  //         message: 'Welcome to Lines of Light!',
  //       },
  //       ...history.map((item) => ({
  //         ...item,
  //         name: item.name || item.userName || 'Unknown',
  //       })),
  //     ]);
  //   } catch (error) {
  //     console.error('Could not load chat history:', error);
  //   }
  // }

            // loadHistory();
  
// ---------------------------

  useEffect(() => {

    if (!artId) {
      setConnectionStatus('missing-artwork');
      return;
    }

    const protocol =
      window.location.protocol === 'https:' ? 'wss' : 'ws';

    const socket = new WebSocket(
      `${protocol}://${window.location.host}/ws`
    );

    socketRef.current = socket;

    socket.addEventListener('open', () => {
      setConnectionStatus('connected');





      async function loadHistory() {
    try {
      const response = await fetch(
        `/api/art/${encodeURIComponent(artId)}/messages`
      );

      if (!response.ok) {
        throw new Error(
          `Chat history request failed (${response.status})`
        );
      }

      const history = await response.json();

      setMessages([
        {
          name: 'System',
          message: 'Welcome to Lines of Light!',
        },
        ...history.map((item) => ({
          ...item,
          name: item.name || item.userName || 'Unknown',
        })),
      ]);
    } catch (error) {
      console.error('Could not load chat history:', error);
    }
  }



loadHistory();




      socket.send(
        JSON.stringify({
          type: 'join',
          artId,
        })
      );

    });

    socket.addEventListener('message', (event) => {
      try {
        const incomingMessage = JSON.parse(event.data);

        if (
          incomingMessage.type === 'chat' &&
          incomingMessage.artId === artId
        ) {
          setMessages((previousMessages) => [
            ...previousMessages,
            incomingMessage,
          ]);
        }
      } catch (error) {
        console.error('Invalid chat response:', error);
      }
  });

    socket.addEventListener('close', (event) => {
      console.error('WebSocket closed', {
        code: event.code,
        reason: event.reason || 'No reason provided',
        wasClean: event.wasClean,
      });

      if (!cancelled) {
        setConnectionStatus('disconnected');
      }
    });

    socket.addEventListener('error', (error) => {
      console.error('WebSocket connection error:', error);
      setConnectionStatus('error');
    });

    return () => {
      socket.close();
      socketRef.current = null;
    };
  }, [artId]);

  function sendMessage(message) {
    const text = message.trim();
    const socket = socketRef.current;

    if (
      !text ||
      !socket ||
      socket.readyState !== WebSocket.OPEN
    ) {
      return false;
    }

    socket.send(
      JSON.stringify({
        type: 'chat',
        artId,
        name: userName,
        message: text,
      })
    );

    return true;
  }

  return {
    messages,
    sendMessage,
    connectionStatus,
  };
}

