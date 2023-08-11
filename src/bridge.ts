const TOKEN_KEY = 'accessToken';

enum BridgeModel {
  alert,
  toast,
  close,
  keypad,
  share,
  didRegisterMOIT,
}

interface BridgeParams {
  command: keyof typeof BridgeModel;
  value?: string;
}

declare global {
  interface Window {
    webkit: {
      messageHandlers: {
        MOIT: {
          postMessage: (params: BridgeParams) => void;
          // TODO: share
          // TODO: close webview
          // TODO: about keypad
        };
      };
    };
  }
}

export class IOSBridge {
  private token: string | null;

  private initialized: boolean;

  constructor() {
    this.token = null;
    this.initialized = typeof window !== 'undefined';
  }

  private getCookie(key: string): string | null {
    if (this.initialized) {
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

  public nativeToast(v: string) {
    if (this.initialized) {
      window.webkit.messageHandlers.MOIT.postMessage({
        command: 'toast',
        value: v,
      });
    }
  }

  public nativeAlert(v: string) {
    if (this.initialized) {
      window.webkit.messageHandlers.MOIT.postMessage({
        command: 'alert',
        value: v,
      });
    }
  }
}

export const closeWebview = () => {
  console.log('close web view');
  window.webkit.messageHandlers.MOIT.postMessage({
    command: 'close',
  });
};

export const nativeShare = (v: string) => {
  window.webkit.messageHandlers.MOIT.postMessage({
    command: 'share',
    value: v,
  });
};

export const nativeAlert = (v: string) => {
  if (window.webkit) {
    window.webkit.messageHandlers.MOIT.postMessage({
      command: 'alert',
      value: v,
    });
  } else {
    alert(v);
  }
};

export const nativeToast = (v: string) => {
  if (window.webkit) {
    window.webkit.messageHandlers.MOIT.postMessage({
      command: 'toast',
      value: v,
    });
  } else {
    alert(v);
  }
};
