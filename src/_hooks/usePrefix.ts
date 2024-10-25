import { useContext } from 'react';
import { ConfigProvider } from 'antd';

export const usePrefix = (
  tag?: string,
  props?: {
    prefixCls?: string;
  }
) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  return getPrefixCls(tag, props?.prefixCls);
  // return 'luckybird-' + tag;
};

// export const usePrefix = (tag?: string) => {
//   return 'luckybird-' + tag;
// };
