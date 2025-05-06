// API configuration file
const CONFIG = {
  // Base URL for the domain
  BASE_URL: "https://meetings.aiiventure.com",

  // Node.js backend endpoints
  NODE_API: {
    SOCKET_URL: "https://meetings.aiiventure.com",
    TRANSCRIPTION: "/api/transcription",
    TRANSCRIPTIONS: "/api/transcriptions",
    CLEAR_TRANSCRIPTIONS: "/api/transcriptions/clear",
  },

  // Python backend endpoints
  PYTHON_API: {
    BASE: "/api/python",
    ANALYZE: "/api/python/analyze",
    RESET: "/api/python/reset",
    WS_TRANSCRIPTION: "wss://meetings.aiiventure.com/api/python/ws/transcription",
  },

  // External APIs
  EXTERNAL: {
    DEEPGRAM: "wss://api.deepgram.com/v1/listen",
  },
};

export default CONFIG;
