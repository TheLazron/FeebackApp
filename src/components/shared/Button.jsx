import PropTypes from 'prop-types';

function Button({children, isDisabled, version, type}){

return (
    <button disabled={isDisabled} type={type} className={`btn btn-${version}`}>
        {children}
    </button>
)


}

Button.defaultProps = {
    version: "primary",
    isDisabled: false,
    type: "button"
}

Button.prototype={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
    type: PropTypes.string
}

export default Button;