import React from 'react'
import Reminder from '../Models/Reminder'

interface ReminderListProps{
  items: Reminder[],
  onRemoveReminder: (id: number) => void
}

const ReminderList = (props: ReminderListProps) => {
  const {items, onRemoveReminder} = props
  return (
    <ul className='list-group'>
      {items.map(reminder => <li className='list-group-item' key={reminder.id}>
        <button className='btn px-3 me-4' onClick={() => onRemoveReminder(reminder.id)}>❌</button>
        {reminder.title}
      </li>)}
    </ul>
  )
}

export default ReminderList