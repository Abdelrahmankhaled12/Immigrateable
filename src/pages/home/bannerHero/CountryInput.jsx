import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { useState } from 'react'
import styles from './CountryInput.module.scss'
import { countryList } from '../../../constants'

const people = countryList;

export default function CountryInput() {
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <div style={{ position: "relative" }} className="CountryInput">
            <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
                <div className="relative">
                    <ComboboxInput
                        className={styles.comboboxInput}
                        displayValue={(person) => person}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder='Country where you were born'
                    />
                </div>
                {
                    filteredPeople.length > 0 && (
                        <ComboboxOptions className={styles.comboboxOptions}>
                            {
                                filteredPeople.map((person) => (
                                    <ComboboxOption
                                        key={person}
                                        value={person}
                                        className={`${styles.comboboxOption} ${person === selected ? styles.focused : ''}`}
                                    >
                                        <div>{person}</div>
                                    </ComboboxOption>
                                ))
                            }
                        </ComboboxOptions>
                    )
                }
            </Combobox>
        </div>
    )
}
