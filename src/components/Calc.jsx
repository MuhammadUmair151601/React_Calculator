import React from 'react'

const Calc = () => {
  return (
    <div className='h-100 w-90 bg-gray-950 rounded-[15px] shadow-[0_0_20px_4px_rgba(255,255,255,0.2)] text-gray-500 font-bold text-3xl'>
      <form action="">
        <div className='bg-blue-500'>
          <input type="text" placeholder='123456.....' />
        </div>
        <div>
          <input type="button" value="AC"/>
          <input type="button" value="DE"/>
          <input type="button" value="."/>
          <input type="button" value="/"/>

        </div>
        <div>
          <input type="button" value="7"/>
          <input type="button" value="8"/>
          <input type="button" value="9"/>
          <input type="button" value="*"/>

        </div>
        <div>
          <input type="button" value="4"/>
          <input type="button" value="5"/>
          <input type="button" value="6"/>
          <input type="button" value="+"/>

        </div>
        <div>
          <input type="button" value="1"/>
          <input type="button" value="2"/>
          <input type="button" value="3"/>
          <input type="button" value="-"/>

        </div>
         <div>
          <input type="button" value="000"/>
          <input type="button" value="00"/>
          <input type="button" value="0"/>
          <input type="button" value="="/>

        </div>
      </form>
    </div>
  )
}

export default Calc