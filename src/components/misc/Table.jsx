import React from 'react'

export function Table({children}) {
  return (
      <table>
          {children}
      </table>
  )
}

export function TableRow(props) {
  return (
      <th>
          <tr>{props.heading}</tr>
          <tr>{props.value}</tr>
      </th>
  )
}
