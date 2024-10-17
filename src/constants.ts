const config = {
  production: {
    google_client_id:
      "453647735724-p1921fnk08p8f992e2vpa7fqv9v3jn5b.apps.googleusercontent.com",
    backend_url: "https://expense-tracker-api.mailarigh.com/apii",
  },
  dev: {
    google_client_id:
      "453647735724-p1921fnk08p8f992e2vpa7fqv9v3jn5b.apps.googleusercontent.com",
    backend_url: "http://localhost:5000/api",
  },
};

export const getConfig = (env = process.env.NODE_ENV ?? "development") =>
  env === "production" ? config["production"] : config["dev"];
