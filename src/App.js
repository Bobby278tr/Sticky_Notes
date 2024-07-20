import './App.css';
import { IoAdd, IoClose, IoSearch, IoSettingsOutline } from 'react-icons/io5';
import Button from './Components/Button';

function App() {
  function addNote(){
    console.log("Add Note");
  }
  return (
    <div className="flex p-5 flex-row">
      <div className="noteslist border w-[280px] flex-shrink-0 h-full mr-2 bg-[#f1f1f1] rounded overflow-hidden">
        <div className="toolbar flex justify-between bg-black bg-opacity-10 items-center">
          <Button click={()=> addNote()} icon={<IoAdd size={20}/>}/>
          <div className="flex">
          <Button click={()=> addNote()} icon={<IoSettingsOutline size={18}/>}/>
          <Button click={()=> addNote()} icon={<IoClose size={20}/>}/>
          </div>
          
        </div>
        <h1 className='text-2xl p-2'>Sticky Notes</h1>
        <div className="flex m-2 bg-slate-300 justify-center items-center">
          <input className='bg-transparent w-full p-1 focus-visible:outline-none' type="text" placeholder='Search...' />
          <Button click={()=> addNote()} icon={<IoSearch size={20}/>}/>
        </div>
        <div className="m-2">
          <div className="flex flex-col w-full p-2 bg-gray-300">
            <div className="flex justify-end">
              <span className="text-xs">Sat, 20 July 2024</span>
            </div>
            <textarea readOnly className='w-full cursor-pointer bg-transparent resize-none focus-visible:outline-none' placeholder='Take a Note....' cols={30} rows={2}></textarea>
          </div>
        </div>
      </div>
      <div className="notesview border w-full">
        <h1>Notes View</h1>
        <div className="flex flex-col bg-red-200">
        <div className="toolbar flex justify-between bg-black bg-opacity-10 items-center">
          <Button click={()=> addNote()} icon={<IoAdd size={20}/>}/>
          <div className="flex">
          <Button click={()=> addNote()} icon={<IoSettingsOutline size={18}/>}/>
          <Button click={()=> addNote()} icon={<IoClose size={20}/>}/>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
