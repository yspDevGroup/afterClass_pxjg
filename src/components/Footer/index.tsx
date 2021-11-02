import { DefaultFooter } from '@ant-design/pro-layout';

export default ({ copyRight = '' }: { copyRight?: string }) => <DefaultFooter copyright={copyRight} />;
