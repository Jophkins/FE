import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button className={classNames(cls.Button, {[cls[theme]]: true}, [className])} {...otherProps} >
            {children}
        </button>
    );
};

export default Button;
