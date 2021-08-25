import { useEffect, useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { getAuthorization } from '@/utils';

const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: any) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('上传的文件类型有误');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('文件大小超过2MB');
  }
  return isJpgOrPng && isLt2M;
};

const AvatarUpload = (props: { img?: string; onValueChange?: (value: string) => void; readonly?: boolean }) => {
  const { img, onValueChange, readonly = false } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string | undefined>(img);

  useEffect(() => {
    setImgUrl(img);
  }, [img]);

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      const code = info.file.response;
      if (code.status === 'ok') {
        setImgUrl(code.data);
        onValueChange?.(code.data);
        message.success('上传成功');
        setLoading(false);
      } else {
        message.success('上传失败');
        setLoading(false);
      }
      // getBase64(info.file.originFileObj, (imageUrl: string) => {
      //   setImgUrl(imageUrl);
      //   setLoading(false);
      //   onValueChange?.(imageUrl);
      // });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传</div>
    </div>
  );
  return (
    <Upload
      name="image"
      listType="picture-card"
      className="avatar-uploader"
      headers={{
        authorization: getAuthorization()
      }}
      disabled={readonly}
      showUploadList={false}
      action="/api/upload/uploadFile?type=avatar"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
  );
};
export default AvatarUpload;
