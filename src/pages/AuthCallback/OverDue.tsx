import Nodata from '@/components/Nodata';
import { removeOAuthToken } from '@/utils';
import overImg from '@/assets/loading.png';

const OverDue = () => {
  removeOAuthToken();
  return (
    <div
      style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -70%)',
      }}
    >
      <Nodata imgSrc={overImg} desc="您还未登录或登录信息已过期，请关闭应用后重新进入" />
    </div>
  );
};

export default OverDue;
