import { ReactNode } from "react"
import styles from "./Button.module.css"

type ButtonType = "button" | "submit" | "reset"

type ButtonProps = {
  type?: ButtonType
  children?: ReactNode
  onClick?: () => void
} & Record<string | number, unknown>

export const Button = (props: ButtonProps) => {
  const { type = "submit", children, onClick, isDisabled, ...rest } = props
  console.log(props, "props")
  console.log(rest, "rest")
  return (
    <button
      className={` ${styles.button}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
