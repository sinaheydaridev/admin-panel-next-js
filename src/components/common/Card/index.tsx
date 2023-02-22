import classNames from "classnames";
import React, { FC } from "react";

interface ICard {
  children: React.ReactNode;
  className?: string;
  variant?: "grey" | "white";
  isPadding?: boolean;
  onClick?: () => void;
}

const Card: FC<ICard> = ({
  children,
  className,
  variant = "grey",
  isPadding = true,
  onClick
}) => {
  const rootClasses = classNames("main-card", className, {
    "main-card__grey": variant === "grey",
    "main-card__white": variant === "white",
    "p-2": isPadding,
  });

  return <div className={rootClasses} onClick={onClick}>{children}</div>;
};

export default Card;
// import React, { FC } from "react";

// interface ICard {
//   children: React.ReactNode;
// }

// const Card: FC<ICard> = ({ children }) => {
//   return <div>Card</div>;
// };

// export default Card;
