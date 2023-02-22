import React, { FC, forwardRef } from "react";
import classNames from "classnames";
import FlexBox from "../FlexBox";

interface ITextField {
  className?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  textLabel?: string;
  value?: string;
  rows?: number;
  multiline?: boolean;
  type?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<ITextField> = forwardRef(
  (
    {
      className,
      placeholder = "متن وارد کن",
      helperText,
      fullWidth = false,
      textLabel,
      value,
      rows,
      error = false,
      multiline = false,
      type = "text",
      icon,
      onChange,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {textLabel && <div className="text-grey mb-2 me-1">{textLabel}</div>}
        {!multiline && (
          <FlexBox className="text-field-wrapper">
            <input
              className={classNames(
                "text-field",
                { "w-100": fullWidth, "border-danger": error },
                className
              )}
              placeholder={placeholder}
              ref={ref as null}
              value={value}
              type={type}
              onChange={onChange && onChange}
              onClick={onClick && onClick}
              {...props}
            />
            <div className="icon">{icon}</div>
          </FlexBox>
        )}
        {multiline && (
          <div className="text-field-wrapper">
            <textarea
              rows={rows}
              className={classNames(
                "text-field",
                { "w-100": fullWidth, "border-danger": error },
                className
              )}
              placeholder={placeholder}
              ref={ref as null}
              value={value}
              onClick={onClick && onClick}
              {...props}
            />
          </div>
        )}
        {helperText && (
          <div
            className={classNames(" fs-7 mt-2", {
              "text-danger": error,
              "text-grey": !error,
            })}
          >
            {helperText}
          </div>
        )}
      </>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
