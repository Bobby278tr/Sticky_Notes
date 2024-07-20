import './App.css';
import { IoAdd, IoCheckmark, IoClose, IoEllipsisHorizontal, IoList, IoSearch, IoSettingsOutline, IoTrash } from 'react-icons/io5';
import Button from './Components/Button';
import { useState } from 'react';

function App() {
  const blankNotes = {
    text: '',
    createdOn: null,
    bgcolor: '#feff9c',
    view: true,
    options: false
  }
  const colors = ['#feff9c', '#fff740', '#7afcff', '#ff65a3', '#ff7eb9', '#e4eeff', '#d2ccf2', '#c8a8d5']
  const [notes, setNotes] = useState([]);

  const addNote = (val) => {
    let newNotes = [...notes];
    val.createdOn = (new Date()).toDateString()
    newNotes.push(val);
    setNotes(newNotes);
  }
  const updateNote = (val, i) => {
    let newNotes = [...notes];
    newNotes[i].text = val;
    setNotes(newNotes);
  }

  const updateColor = (val, i) => {
    let newNotes = [...notes];
    newNotes[i].bgcolor = val;
    setNotes(newNotes);
  }

  const updateView = (i) => {
    let newNotes = [...notes];
    newNotes[i].view = !newNotes[i].view;
    setNotes(newNotes);
  }
  const updateOpt = (i) => {
    let newNotes = [...notes];
    newNotes[i].options = !newNotes[i].options;
    setNotes(newNotes);
  }

  return (
    <div className="flex p-5 flex-row">
      <div className="noteslist border w-[280px] flex-shrink-0 h-full mr-2 bg-[#f1f1f1] rounded overflow-hidden">
        <div className="toolbar flex justify-between bg-black bg-opacity-10 items-center">
          <Button click={() => addNote(blankNotes)} icon={<IoAdd size={20} />} />
          <div className="flex">
            <Button click={() => addNote()} icon={<IoSettingsOutline size={18} />} />
            <Button click={() => addNote()} icon={<IoClose size={20} />} />
          </div>

        </div>
        <h1 className='text-2xl p-2'>Sticky Notes</h1>
        <div className="flex m-2 bg-slate-300 justify-center items-center">
          <input className='bg-transparent w-full p-1 focus-visible:outline-none' type="text" placeholder='Search...' />
          <Button click={() => addNote()} icon={<IoSearch size={20} />} />
        </div>

        {notes.length > 0 && notes.map((x, i) => {
          return <div className="m-2 relative cursor-pointer" onClick={() => updateView(i)}>
            <div className={`noteview ${x.view ? 'active' : ''} flex flex-col w-full p-2`} style={{ backgroundColor: `${x.bgcolor}` }}>
              <div className="flex justify-end">
                <span className="text-xs">{x.createdOn}</span>
              </div>
              <textarea value={x.text} readOnly className='w-full cursor-pointer bg-transparent resize-none focus-visible:outline-none' placeholder='Take a Note....' cols={30} rows={2}></textarea>
            </div>

          </div>
        })}

      </div>
      <div className="notesview w-full">
        {notes.length && notes.map((x, i) => {
          if (x.view) {
            return <div className="flex flex-col rounded overflow-hidden w-[400px] pb-1 mb-2" style={{ backgroundColor: `${x.bgcolor}` }}>
              <div className="toolbar flex justify-between bg-black bg-opacity-10 items-center">
                <Button click={() => addNote()} icon={<IoAdd size={20} />} />
                <div className="flex">
                  <Button click={() => updateOpt(i)} icon={<IoEllipsisHorizontal size={18} />} />
                  <Button click={() => updateView(i)} icon={<IoClose size={20} />} />
                </div>
              </div>
              {x.options &&
                <div className='toolarea flex flex-col bg-gray-100'>                  <div className='colorarea w-full flex'>
                    {colors.map((color, cindex) => {
                      return <span onClick={() => updateColor(color, i)} className='flex flex-row  w-full h-8 justify-center items-center cursor-pointer' style={{ backgroundColor: `${color}` }}>
                        {x.bgcolor == color ? <IoCheckmark size={20} /> : <></>}
                      </span>
                    })}

                  </div>
                  <button className='flex justify-start items-center hover:bg-slate-200 py-1 px-2'>
                    <IoList className='mr-2' /> Notes List
                  </button>
                  <button className='flex justify-start items-center hover:bg-slate-200 py-1 px-2'>
                    <IoTrash className='mr-2' /> Delete Note
                  </button>
                </div>}

              <textarea value={x.text} onChange={(e) => updateNote(e.target.value, i)} className='w-full bg-transparent focus-visible:outline-none p-2' placeholder='Take a note...' name="" id="" cols={30} rows={4}></textarea>
            </div>
          }

        })}

        <p>{JSON.stringify(notes)}</p>
      </div>
    </div>
  );
}

export default App;
