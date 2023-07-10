const TOKEN_KEY = 'TOKEN';

export class IOSBridge {
  private token: string | null;

  constructor() {
    this.token = null;
  }

  private getCookie(key: string): string | null {
    if (typeof window !== 'undefined') {
      const cookies = document.cookie.split(';');

      for (const cookie of cookies) {
        const [cKey, value] = cookie.trim().split('=');

        if (cKey === key) {
          return decodeURIComponent(value);
        }
      }
    }

    return null;
  }

  public getToken(): string | null {
    if (this.token === null) {
      this.token = this.getCookie(TOKEN_KEY);
    }
    return this.token;
  }
}
