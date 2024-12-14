import { message } from 'antd';

export function useAntMessage() {
  const [messageApi, contextHolder] = message.useMessage();

  const success = (text: string) => {
    messageApi.open({
      type: 'success',
      content: text,
    });
  };

  const error = (text: string) => {
    messageApi.open({
      type: 'error',
      content: text,
    });
  };

  const warning = (text: string) => {
    messageApi.open({
      type: 'warning',
      content: text,
    });
  };

  return { contextHolder, success, error, warning };
}
