import classes from "./Button.module.css";
export const Button =(props) => {
  console.log(props)
  return(
    <button onClick={props.handleFunc} className={classes.button}>{props.bname}</button>
  )
}