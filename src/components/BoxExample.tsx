import React from 'react'

type BoxProps = { 
    children: React.ReactNode, style?: React.CSSProperties
};

const Box = ({children, style={} }:BoxProps) => {
    return (
        <section style={{padding: '1em', border: '5px solid purple', ...style}}>
            {children}
        </section>
    )
}
function BoxExample() {
  return (
      <Box>
          Just a string.
          <p>Some html that is not nested</p>
          <Box>
              <h2>Another React Component with one child</h2>
          </Box>
          <Box style={{ borderColor:'red'}}>
              <h2>A nested React Component with two children</h2>
              <p>A nested child</p>
          </Box>
      </Box>
  )
}

export default BoxExample