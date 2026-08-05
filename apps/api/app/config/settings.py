from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "SwitchPilot API"
    APP_ENV: str = "development"
    DEBUG: bool = True
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = "default_secret_key_change_in_production"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440

    POSTGRES_SERVER: str = "localhost"
    POSTGRES_PORT: int = 5432
    POSTGRES_USER: str = "switchpilot"
    POSTGRES_PASSWORD: str = "switchpilot_secret"
    POSTGRES_DB: str = "switchpilot_db"

    REDIS_HOST: str = "localhost"
    REDIS_PORT: int = 6379

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
