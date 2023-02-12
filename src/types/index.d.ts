export * from './user';

export type NotifyItem = {
  id: string;
  type: 'success' | 'warning' | 'error';
  message: string;
  timeoutID?: string;
}

export type NotifyPayload = Pick<NotifyItem, 'type' | 'message'> & { timeout?: number; }