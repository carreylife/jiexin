import { Tooltip, Button } from 'antd';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { CheckOutlined } from '@ant-design/icons';
import styles from './index.less';

const colorList = [
  {
    label: '纯净白',
    value: '#FFFFFF',
  },
  {
    label: '经典蓝',
    value: '#1890ff',
  },
  {
    label: '湛蓝',
    value: '#5378FF',
  },
  {
    label: '燃烧橙',
    value: '#FF8F00',
  },
  {
    label: '薄荷绿',
    value: '#00B578',
  },
  {
    label: '拂晓蓝',
    value: '#35B4FF',
  },
];

const home: React.FC<any> = (props) => {
  const dispatch: (data: any) => Promise<any> = useDispatch();
  const {
    theme: { primaryColor },
  } = useSelector((state: any) => state);

  const onChange = (primaryColor: string) => {
    dispatch({
      type: 'theme/updateState',
      payload: { primaryColor },
    });
  };

  return (
    <div className={styles.home}>
      <header>
        {colorList.map((item) => {
          const { label, value: colorValue } = item;
          const colorName = colorValue.toLocaleLowerCase().substr(1);
          const checked = primaryColor === colorValue;
          return (
            <Tooltip key={colorValue} title={label}>
              <div
                key={colorValue}
                style={{ background: colorValue }}
                onClick={() => onChange(colorValue)}
                className={classnames('primary-color-item', colorName)}
              >
                {checked && <CheckOutlined className="checked-icon" />}
              </div>
            </Tooltip>
          );
        })}
      </header>
      <section>...content ...content ...content ...content</section>
    </div>
  );
};

export default home;
