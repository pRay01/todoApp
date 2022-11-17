
import { useEffect, useState } from 'react';
import { database } from '../utils/db';
import {setDoc, doc, getDoc, collection, query, getDocs, updateDoc,deleteDoc} from 'firebase/firestore'
import styles from '../styles/Home.module.css'

export default function Home() {
 
  const [name, setName] = useState("");
  const[items, setItems] = useState([]);
  const[isEditItem, setIsEditItem ] = useState("")
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const addItem = async() =>{
    if(!name||!price||!quantity){
      alert('Please fill the form')}
      else{
        const myNewInputData = {
          id: new Date().getTime().toString(),
          name,
          quantity,
          price
        }
        await setDoc(doc(database,"todo", myNewInputData.id),myNewInputData )
       
        setName("");
        setPrice("");
        setQuantity("");
       
      }
  } 
 
  const getData = async() => {
    const dbInstance = collection(database,"todo")
    const q = query(dbInstance)
    const querySnapshot = await getDocs(q)
    const newArray:any = [];
    if (!querySnapshot.empty){   
      querySnapshot.forEach(item =>{
        const simple = item.data()
        newArray.push(simple)
      })
  
    }
    setItems(newArray)  
   };

  const editItem = (index:any) => {
    const item_todo_edited:any = items.find((curElem:any) => {
        return curElem.id === index;
    });
    setName(item_todo_edited?.name)
    setPrice(item_todo_edited?.price)
    setQuantity(item_todo_edited?.quantity)
    setIsEditItem(index);
}

useEffect(() => {
  getData()
}, [])


  return (
    <div className=' bg-red-500'>
        <div className=''>
            <input
               type="text"
               placeholder='add items'
               value={name}
               onChange ={
                (event) => setName(event.target.value) }/>
            <input
               type="text"
               placeholder='add price'
               value={price}
               onChange ={
              (event) => setPrice(event.target.value) } /> 
               
            <input
               type="text"
               placeholder='add quantity'
               value={quantity} 
               onChange ={
                (event) => setQuantity(event.target.value) }/>       
        </div>
        <div>
          <button  onClick={addItem}>Add</button>
        </div>
        <div className='showItems '>
                    {items?.map((curElem:any) => {
                        return(
                            <div className='flex' key={curElem?.id}>
                            <div>{curElem.name}</div>
                            <div>{curElem.price}</div>
                            <div>{curElem.quantity}</div>
                            <div className='todo-btn'>
                              <i className='far fa-edit add-btn'
                              onClick={() => editItem(curElem.id)}
                              ></i>   
                            </div>
                        </div>
                        )
                    })}
                </div> 
    </div>
  )
}
