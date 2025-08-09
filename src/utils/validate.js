export const validate=(email,password)=>{
    const isValidEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#\-])[A-Za-z\d@$!%*?&#\-]{8,}$/.test(password);

    if(!isValidEmail) return "Email is invalid";
    if(!isValidPass) return "Password is invalid";
}