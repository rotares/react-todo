import { ComponentProps } from "react"
import styles from "./Field.module.css"

//включает в себя ComponentProps и кастомные поля
interface FieldProps extends ComponentProps<"input"> {
  className?: string
  label: string
  id: string
  onInput?: (arg: React.SyntheticEvent<HTMLInputElement>) => void
}

export const Field = (props: FieldProps) => {
  const { className = "", value, label, id, onInput, ...rest } = props

  return (
    <div className={`${className} ${styles.field}`}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        className={styles.input}
        id={id}
        onInput={onInput}
        placeholder=" "
        autoComplete="off"
        {...rest}
      />
    </div>
  )
}
