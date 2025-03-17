import React from 'react';
import { Card } from 'flowbite-react';
import { Advice } from '../Types/Advice';

type CardNoticeViewProps = {
  notice: Advice;
};

const CardNoticeView: React.FC<CardNoticeViewProps> = ({ notice }) => {
  return (
    <>
      <Card
        className="hover:scale-105 transition-transform duration-300"
      >
        <div className="w-full h-48 overflow-hidden">
          <img
            src={notice.image}
            alt={notice.reason}
            className="object-cover w-full h-full"
          />
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {notice.reason}
        </h5>
        <p className="font-normal text-gray-700">
          Información extra{notice.extraInfo}
        </p>
        <p className="font-normal text-gray-700">
          Fecha: {new Date(notice.date).toLocaleDateString()}
        </p>
      </Card>
    </>
  );
};

export default CardNoticeView;