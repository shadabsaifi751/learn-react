import React,{useState} from 'react';
import "../components/addtask.scss"

const Addtask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState('false')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert("please add task")
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

  return (
        <form onSubmit={onSubmit}>
            <input type="name" placeholder="Name" className='form-control' value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="name" placeholder="Day & time" className='form-control' value={day} onChange={(e) => setDay(e.target.value)}/>
            <input type="name" placeholder="Position" className='form-control' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            <label>
                <input type="checkbox" checked={reminder}/> Agree with your concern
            </label>
            
            <button className="effect-btn-theme w-50" type='submit' value="save task">Save Data</button>
        </form>
  )
}

export default Addtask