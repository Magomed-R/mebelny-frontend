import styles from './MyBtn.module.scss'

interface btnProps {
  color: string,
  bgColor: string,
  after?: string,
  children: React.ReactNode,
  margin?: string,
  fz?: string,
  className?: string,
  onClick?: any,
  disabled?: boolean
}

export const MyBtn = ({ color, bgColor, children, margin, fz, className, onClick, disabled }: btnProps) => {
  const customStyle: {} = {
    'margin': margin,
    '--bgColor': bgColor,
    '--color': color,
    '--fz': fz,
  }

  return (
    <button
      className={`${styles.btn} ${className} ${disabled && styles.disabled}`}
      style={customStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}