import { ChangeEvent, ComponentProps } from "react"
import styles from "./Field.module.css"

//включает в себя ComponentProps и кастомные поля
interface FieldProps extends ComponentProps<"input"> {
  className?: string
  label: string
  id: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Field = (props: FieldProps) => {
  const { className = "", value, label, id, onChange, ...rest } = props

  return (
    <div className={`${className} ${styles.field}`}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        className={styles.input}
        id={id}
        onChange={onChange}
        placeholder=" "
        autoComplete="off"
        {...rest}
      />
    </div>
  )
}
