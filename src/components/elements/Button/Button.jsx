import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, className, variant }) => {
  const variantBtn = () => {
    if (variant === 'border') {
      return 'bg-white border border-primary-blue';
    }
    return 'bg-primary-blue text-white';
  };

  return (
    <button className={[className, variantBtn(), 'p-[13px] rounded-[50px] font-semibold text-base min-w-[140px]'].join(' ')} type="button">{title}</button>
  );
};

export default Button;

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
