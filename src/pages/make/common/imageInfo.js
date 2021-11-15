import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Upload, Modal, Image } from 'antd';
import message from '../../common/message';
import getBase64 from '../../common/getBase64';
import './imageInfo.less';

const limit = {
  type: ['jpg', 'jpeg', 'png', 'webp'],
  size: 5,
};

const ImageInfo = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const beforeUpload = (file) => {
    const imageExt = file.type.split('image/')[1] || '';
    const isValidImage = !!~limit.type.indexOf(imageExt);
    if (!isValidImage) {
      message.error('', '图片格式不符合!');
    }
    const isLtSize = file.size / 1024 / 1024 < limit.size;
    if (!isLtSize) {
      message.error('', `图片大小超过 ${limit.size}MB!`);
    }
    return isValidImage && isLtSize;
  };

  const handleCancel = () => setPreviewVisible(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewVisible(true);
    setPreviewImage(file.url || file.preview);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>请上传照片</div>
    </div>
  );
  return (
    <div className="upload-Image">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={handlePreview}
        beforeUpload={beforeUpload}
      >
        {fileList.length < 1 && uploadButton}
      </Upload>
      {/* <Image
        preview={false}
        width={100}
        style={{ marginTop: 10 }}
        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        //         onClick={() => setVisible(true)}
      /> */}
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );
};
export default ImageInfo;
