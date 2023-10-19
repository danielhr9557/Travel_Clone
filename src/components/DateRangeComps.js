import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import '../styleSheets/date-range-comps.css'



const DateRangeComp = () => {

  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  return (
    <div className="calendarWrap">
          <DateRange
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="calendarElement"
          />
  
    </div>
  );
}

// Segundo Date Rage Comp

const DateRangeCompToggle = () => {

  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle 
  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if( e.key === "Escape" ) {
      setOpen(false)
    }
  }

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if( refOne.current && !refOne.current.contains(e.target) ) {
      setOpen(false)
    }
  }

  return (
    <div className="calendarWrap ">

      <input
        value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
        readOnly
        className="inputBox "
        onClick={ () => setOpen(open => !open) }
      />

      {/* Inputs personalizados */}
      <p onClick={ () => setOpen(open => !open) }>
        <span className='d-block'>
          Llegada
        </span>
        {`${format(range[0].startDate, "MM/dd/yyyy")}`}
      </p>
      <p onClick={ () => setOpen(open => !open) }>
      <span className='d-block'>
          Salida
        </span>
        {`${format(range[0].endDate, "MM/dd/yyyy")}`}
      </p>
      

      <div ref={refOne}>
        {open && 
          <DateRange
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="calendarElement date-box-toggle"
            class="rdrDateDisplayWrapper rdrMonthAndYearPickers"
            
          />
        }
      </div>

    </div>
  )
}


export  { DateRangeComp , DateRangeCompToggle };