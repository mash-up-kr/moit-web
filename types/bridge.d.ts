enum BridgeModel {
  alert,
  toast,
}

interface BridgeParams {
  command: keyof typeof BridgeModel;
  value: string;
}

declare global {
  interface Window {
    webkit: {
      messageHandlers: {
        MOIT: {
          postMessage(params: BridgeParams): void;
        };
      };
    };
  }
}
