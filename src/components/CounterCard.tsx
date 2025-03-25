import { Card, Popover } from "flowbite-react";
import React from "react";
import { SlOptions } from "react-icons/sl";
const CounterCard = ({
  text,
  children,
  counter,
}: {
  text: string;
  children: React.ReactNode;
  counter: number;
}) => {
  return (
    <>
      <Card className="tbody dark:bg-[#2d2d2d]">
        <div className=" flex justify-between items-center">
          <span>{text}</span>
          <Popover content={children} trigger="click" placement="right">
            <button type="button" title="Opciones">
              <SlOptions className=" hover:scale-150 transition-transform" />
            </button>
          </Popover>
        </div>
        <span>{counter}</span>
      </Card>
    </>
  );
};

export default CounterCard;
