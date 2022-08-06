import { useEffect, useState } from "react";
import NewReminder from "./components/NewReminder";
import ReminderList from "./components/ReminderList";
import Reminder from "./Models/Reminder";
import reminderService from './services/reminder'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  const loadReminders = async () => {
    const reminders: Reminder[] = await reminderService.getReminders()
    setReminders(reminders)
  }

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  const onAddReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title)
    setReminders([{...newReminder, title}, ...reminders])
  }

  useEffect(() => {
    loadReminders()
  }, [])
  
  return (
    <div className="App">
      <NewReminder onAddReminder={onAddReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
