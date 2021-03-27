import React from 'react';

import { Controller, useForm } from "react-hook-form";

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
  } from "@reach/combobox";

const Add = (props) => {

    const { control, handleSubmit, errors, setValue } = useForm();

    const onSubmit = (data) => {
        props.add(data.name);
        setValue('name', '')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={comboProps => (
                    <Combobox aria-label="Velg en vare">
                        <ComboboxInput
                            value={comboProps.value}
                            onChange={e => comboProps.onChange(e.target.value)}
                        />
                        <ComboboxPopover>
                            <ComboboxList>
                                {props.allItems.map((item, index) => (
                                    <ComboboxOption
                                        key={index}
                                        value={item}
                                    />
                                ))}
                            </ComboboxList>
                        </ComboboxPopover>
                    </Combobox>

                )}
            />
            {errors.name && (
                <div>Må fylles ut</div>
            )}
            <button>Legg til</button>
        </form>
    )
}

export default Add;
