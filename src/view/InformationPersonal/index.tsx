import { Image } from 'antd';
import React from 'react';

import { avatar } from '../../assets/image';

const InformationPersonal: React.FC = () => (
  <div>
    <Image width="4.8rem" src={avatar} />
    <h3>Đỗ Minh Vương</h3>
    <p>FrontEnd developer</p>
    <div>
      <p>OBJECTIVE</p>
      <ul>
        <li>
          - 12/2022: Have strong knowledge of Front End development with ReactJS, Redux. Become a
          Junior Front End developer. Basic communication English. Learn Backend Web Development.
        </li>
        <li>- 12/2023: Become a Full Stack Developer. Can communicate fluently in English.</li>
      </ul>
    </div>
  </div>
);

export default InformationPersonal;
