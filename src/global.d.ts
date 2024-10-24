export {};

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                close: () => void;
                ready: () => void;
                expand: () => void;
                initDataUnsafe?: any;
                sendData: (data: string) => void;
            };
        };
    }
}
