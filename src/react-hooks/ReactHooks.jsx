import React, { useState } from 'react'
import UseState from './UseState';
import UseReducer from './UseReducer';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import TodoApp from './TodoApp';
import TodoAppNew from './TodoAppNew'

const ReactHooks = () => {
    const [activeTab, setActiveTab] = useState('Tab1');
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
  return (
    <>
      <div className="w-full  mx-auto mt-8 container">
      <div className="flex space-x-4 border-b-2 border-gray-200">
        <button
          className={`py-2 px-4 text-2xl ${
            activeTab === 'Tab1' ? 'border-b-4 border-blue-500 text-blue-500 text-2xl' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('Tab1')}
        >
          useState
        </button>
        <button
          className={`py-2 px-4 text-2xl ${
            activeTab === 'Tab2' ? 'border-b-4 border-blue-500 text-blue-500 text-2xl' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('Tab2')}
        >
          UseReducer
        </button>
        <button
          className={`py-2 px-4 text-2xl ${
            activeTab === 'Tab3' ? 'border-b-4 border-blue-500 text-blue-500 text-2xl' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('Tab3')}
        >
          UseEffect
        </button>
        <button
          className={`py-2 px-4 text-2xl ${
            activeTab === 'Tab4' ? 'border-b-4 border-blue-500 text-blue-500 text-2xl' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('Tab4')}
        >
          UseRef
        </button>
        <button
          className={`py-2 px-4 text-2xl ${
            activeTab === 'Tab5' ? 'border-b-4 border-blue-500 text-blue-500 text-2xl' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('Tab5')}
        >
          Todo-App
        </button>
        <button
          className={`py-2 px-4 text-2xl ${
            activeTab === 'Tab6' ? 'border-b-4 border-blue-500 text-blue-500 text-2xl' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('Tab6')}
        >
          Todo-App-New
        </button>
      </div>

      <div className="mt-6">
        {activeTab === 'Tab1' && <div>
             <UseState />
            </div>}
        {activeTab === 'Tab2' && <div><UseReducer /></div>}
        {activeTab === 'Tab3' && <div>
           <UseEffect />
          </div>}
          {activeTab === 'Tab4' && <div>
           <UseRef />
          </div>}
          {activeTab === 'Tab5' && <div>
           <TodoApp />
          </div>}
          {activeTab === 'Tab6' && <div>
           <TodoAppNew />
          </div>}
      </div>
    </div>
    </>
  )
}

export default ReactHooks
