import PropTypes from 'prop-types';

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Add prop validation for children and className
Button.propTypes = {
  children: PropTypes.node.isRequired, // children should be any renderable content (string, element, etc.)
  className: PropTypes.string,          // className is an optional string
};

Button.defaultProps = {
  className: '',                        // Default className to an empty string if not provided
};
