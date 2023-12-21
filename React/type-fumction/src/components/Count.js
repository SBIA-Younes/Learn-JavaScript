import React from 'react'

function Count({count, bgColor, text}) {

  console.log(`ProgressBar ${text}`);

  const progres = {width: `${count}%`}
  return (
    <>
      <p className='h1'>{count} %</p>
      <div className='progress'>
        <div className={`progress-bar progress-bar-striped bg-${bgColor}`} role='progressbar' style={progres}>
        </div>
      </div>
    </>
  )
}

export default React.memo(Count);