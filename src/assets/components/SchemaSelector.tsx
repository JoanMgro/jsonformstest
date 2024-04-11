
interface Props{
    onOptionChange: (value: number) => void
}

export const SchemaSelector = ({onOptionChange}: Props) => {
  return (
    <select
        className="block"
        onChange={e => onOptionChange(parseInt(e.target.value))}>
        <option value="0">Name & Lastname</option>
        <option value="1">Name & Lastname & sex</option>
        <option value="2">All plus age calculation</option>
    </select>
  )
}
