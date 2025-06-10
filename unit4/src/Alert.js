// import "./Alert.css";


// const getColor = variant => {
//     switch (variant) {
//         case "info":
//             return "skyblue";
//         case "success":
//             return "green";
//         case "error":
//             return "red";
//         case "warning":
//             return "orange";
//         default:
//             throw new Error(`Example - ${variant}`);
//     }
// }

// export const Alert = ({ variant, outline, shadow, children}) => {
//     const classNames = ['alert', variant];
//     if (outline) classNames.push("is-outline");
//     if (shadow) classNames.push('is-shadow')
    
    
//     return <p className={classNames.join(" ")}>{children}</p>
// }