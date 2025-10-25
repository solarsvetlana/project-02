import { useState } from 'react'
import ChildA from '../../components/ChildA/ChildA'
import ChildB from '../../components/ChildB/ChildB'
import style from './Parent.module.css'

export default function Parent() {
    const [kindness, setKindness] = useState(0);
  return (
    <div className={style.container}>
        <h2>Parent</h2>
        <p>Kindness: {kindness}</p>
        <ChildA kindness={kindness} setKindness={setKindness} />
        <ChildB kindness={kindness} />
        </div>
  )
}
