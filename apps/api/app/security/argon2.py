from passlib.context import CryptContext

# Configure Passlib to use Argon2 as default password hasher
pw_context = CryptContext(schemes=["argon2", "bcrypt"], deprecated="auto")


class PasswordHasher:
    @staticmethod
    def hash_password(password: str) -> str:
        """Hash plain text password using Argon2."""
        return pw_context.hash(password)

    @staticmethod
    def verify_password(plain_password: str, hashed_password: str) -> bool:
        """Verify plain text password against Argon2 hash."""
        return pw_context.verify(plain_password, hashed_password)
