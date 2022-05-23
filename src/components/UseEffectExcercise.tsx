import React, { useState, ChangeEvent } from 'react'

const inc = (count: number) => count + 1;
const dec = (count: number) => count - 1;

function UseEffectExcercise() {

  const [count, setCount] = useState(0);

  // helper fn()
  const ChangeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value)
  }
  // UseEffectExSolution
  // useEffect(() => {
  //   setTimeout(() => setCount(count+1), 1000);
  // }, [count])

  return (
    <main>
      <section>
        <h2>Days Since Last Incident</h2><br /><br />
        <h1>{count}</h1>
      </section>
      <section>
        <button onClick={() => setCount(dec)} >Decrement</button>
        <button onClick={() => setCount(0)} >Reset</button>
        <button onClick={() => setCount(inc)} >Increment</button>
      </section>
      <section>
        <h6>Set Count</h6>
        {/* All below three works */}
        <input type="number" name="count" id="set-to" value={count} onChange={ChangeCount} />
        <input type="number" name="count" id="set-to" value={count} onChange={(e:ChangeEvent<HTMLInputElement>) =>{
          setCount(+e.target.value)
        } } />
        <input type="number" id="set-to" value={count} onChange={(e) =>{
          setCount(+e.target.value)
        } } />
      </section>
    </main>
  )
}


export default UseEffectExcercise