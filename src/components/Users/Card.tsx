import { FC, ReactNode } from "react";

type Props = {
  Icon: any;
  title: string;
  total: number;
};

const Card: FC<Props> = ({ Icon, title, total }) => {
  return (
    <div className="card">
      <Icon />
      <p className="title">{title}</p>
      <p className="total">{total}</p>
    </div>
  );
};

export default Card;
