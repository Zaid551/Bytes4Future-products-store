import React from 'react'
interface ButtonProps{
  children: React.ReactNode
  onClick?: ()=> void;
  disabled?: boolean;
  className?: string
}

export const Button = ({children, className, onClick, disabled} : ButtonProps) => {

  return (
    
    <button 
    type="button" 
    className={className}
    onClick={onClick} 
    disabled={disabled}>
      {children}
    </button>
  )
}
