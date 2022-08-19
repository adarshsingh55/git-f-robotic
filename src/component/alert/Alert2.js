import React ,{useCallback,useContext}from "react";
import { useEffect } from "react";
import style from "./Alert2.module.css";
import inputContext from "../../context/InNodeContext";
// export default function Alert2({ toastList, position,setList }) {
export default function Alert2({position}) {
    const context = useContext(inputContext);
    const {setList,List } = context;
   const  toastList =List
    const deleteToast=useCallback(  
      (id) => {
        //   console.log(id);
        const toastListItem =toastList.filter(e=>e.id !== id)
        setList(toastListItem)
      },[toastList,setList])

       useEffect(() => {
        const interval =setInterval(()=>{
            if(toastList.length){
deleteToast(toastList[0].id)
            }
        },3000)
        return ()=>{
            clearInterval(interval)
        }
       }, [deleteToast,toastList.length,toastList])
       
   
  return (
    <div className={`${style.container} ${style[position]}`}>
      {toastList.map((toast, i) => {
        return (
          <div className={`${style.notification} ${style.toast} ${style[position]}`}  key={i} style={{ backgroundColor: toast.backgoundColor }}>
            <button onClick={()=>deleteToast(toast.id)}>X</button>
            <div>
              <div className={`${style.title}`} >{toast.title}</div>
              <div className={`${style.description}`}>{toast.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
