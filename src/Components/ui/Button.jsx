function Button({ children, className = "" }) {
  return (
    <div className={`inline-block rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 ${className}`} >

      {children}
      
    </div>
  );
}

export default Button;