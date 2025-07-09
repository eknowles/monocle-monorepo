import { WEBSOCKET_SERVER } from "../../constants";
import { Observable, Subject, Subscription } from "rxjs";
import { ReplaySubject } from 'rxjs';

class WebSocketService {
  private websocket: WebSocket | null = null;
  private openSubject = new Subject<Event>();
  private messageSubject = new Subject<any>();
  private closeSubject = new Subject<CloseEvent>();
  private errorSubject = new Subject<Event>();
  private connectionStatusSubject = new ReplaySubject<boolean>(1); // Use ReplaySubject to always emit the latest status

  public open$: Observable<Event> = this.openSubject.asObservable();
  public message$: Observable<any> = this.messageSubject.asObservable();
  public close$: Observable<CloseEvent> = this.closeSubject.asObservable();
  public error$: Observable<Event> = this.errorSubject.asObservable();
  public connectionStatus$: Observable<boolean> = this.connectionStatusSubject.asObservable();

  private reconnectTimeout: any;
  private next_message_id = 0;

  constructor() {
    this.connect();
  }

  public get readyState() {
    return this.websocket ? this.websocket.readyState : WebSocket.CLOSED;
  }

  private connect() {
    this.websocket = new WebSocket(WEBSOCKET_SERVER);

    this.websocket.onopen = (event) => {
      console.log("WebSocket connected");
      this.openSubject.next(event);
      this.connectionStatusSubject.next(true);
    };

    this.websocket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.messageSubject.next(data);
      } catch (error) {
        console.error("Failed to parse WebSocket message:", error);
        this.errorSubject.next(new ErrorEvent("parse", { error }));
      }
    };

    this.websocket.onclose = (event) => {
      console.log("WebSocket disconnected");
      this.closeSubject.next(event);
      this.connectionStatusSubject.next(false);
      // Reconnect after a delay
      this.reconnectTimeout = setTimeout(() => this.connect(), 3000);
    };

    this.websocket.onerror = (event) => {
      console.error("WebSocket error:", event);
      this.errorSubject.next(event);
    };
  }

  public send(method: string, parameters: any, return_parameters: any): void {
    if (!this.websocket || this.readyState !== WebSocket.OPEN) {
      console.warn(`WebSocket not connected, message not sent: ${method}`);
      return;
    }

    const message = JSON.stringify({
      jsonrpc: "2.0",
      id: String(++this.next_message_id),
      method,
      params: parameters,
      return_params: return_parameters,
    });

    this.websocket.send(message);
  }

  public close(): void {
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
    }
    if (this.websocket) {
      this.websocket.close();
    }
  }
}

export default new WebSocketService();