module.exports = {
  apps: [
    {
      name: "jue-node-backend",
      script: "back-end/server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3004,
      },
      watch: false,
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
    },
    {
      name: "jue-python-backend",
      script: "python-backend/simple_backend.py",
      interpreter: "python3",
      watch: false,
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      env: {
        PORT: 8004,
      },
    },
  ],
};
