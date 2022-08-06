import React, { useState } from "react"

interface NewReminderProps {
  onAddReminder: (title: string) => void
}

const NewReminder = (props: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState('')

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    if(!title) {
      return
    }
    props.onAddReminder(title)
    setTitle('')
  }

  return (
   <form onSubmit={submitForm}>
    <input 
      value={title}
      onChange={e=> setTitle(e.target.value)}
      id="title"
      type="text"
      className="form-control"
      placeholder="Study typescript.." />
    <button type="submit" className="btn btn-success my-4 rounded-pill py-2 ms-2">Add Reminder</button>
   </form>
  )
}

export default NewReminder