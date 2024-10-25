import React from 'react';
import { Card } from 'flowbite-react';
import { Notice } from '../Types/Advice';

type CardNoticeViewProps = {
  notice: Notice;
};

const CardNoticeView: React.FC<CardNoticeViewProps> = ({ notice }) => {
  return (
    <Card
      imgAlt={notice.reason}
      imgSrc={notice.Image}
      className="hover:scale-105 transition-transform duration-300"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900">
        {notice.reason}
      </h5>
      <p className="font-normal text-gray-700">
        Consideraciones: {notice.considerations}
      </p>
      <p className="font-normal text-gray-700">
      Fecha: {notice.date}
      </p>
    </Card>
  );
};

export default CardNoticeView;