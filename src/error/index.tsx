import React, {HTMLAttributes} from "react";

const FormError: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <p className={`text-red-500 ${className}`} {...props}>
      {children}
    </p>
  );
};

export default React.memo(FormError);