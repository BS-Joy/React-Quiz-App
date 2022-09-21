import classes from './styles/Button.module.css'

const Button = ({ children, className }) => {
    return (
        <>
            <div class={`${classes.button} ${className}`}>
                {children}
            </div>
        </>
    );
}

export default Button;
