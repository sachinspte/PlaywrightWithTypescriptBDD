export interface EnvConfig {
    baseURL: string;
    apiKey: string;
  }
  
  const configs: Record<string, EnvConfig> = {
    dev: {
      baseURL: "https://dev.example.com",
      apiKey: "dev-key",
    },
    staging: {
      baseURL: "https://staging.example.com",
      apiKey: "staging-key",
    },
    prod: {
      baseURL: "https://prod.example.com",
      apiKey: "prod-key",
    },
  };
  
  export const getEnvConfig = (env: string): EnvConfig => {
    if (!configs[env]) {
      throw new Error(`Environment '${env}' is not defined.`);
    }
    return configs[env];
  };
  