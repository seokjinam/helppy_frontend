'use client'

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import dogSide from "@/assets/images/dog_side.png";
import catSide from "@/assets/images/cat_side.png";
import Image from "next/image";
import font from '../common/generator/font';
import flex from '../common/generator/flex';

export default function PetRadio() {
    const [selectedPet, setSelectedPet] = useState<string>('');

    const handleSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPet(e.target.value);
    };    

    return (
        <PetRadioBox>
            <RadioButton>
                <PetRadioInput 
                    type="radio" 
                    id="dog" 
                    name="pet" 
                    value="dog" 
                    checked={selectedPet === 'dog'} 
                    onChange={handleSelection}
                />
                <RadioLabel htmlFor="dog">
                    강아지
                </RadioLabel>
                <Image src={dogSide} alt="강아지" style={{ width: "5.625rem", height: "5.625rem"}}/>
            </RadioButton>
            <RadioButton>
                <PetRadioInput 
                    type="radio" 
                    id="cat" 
                    name="pet" 
                    value="cat" 
                    checked={selectedPet === 'cat'} 
                    onChange={handleSelection}
                />
                <RadioLabel htmlFor="cat">
                    고양이
                </RadioLabel>
                <Image src={catSide} alt="고양이" style={{ width: "5.625rem", height: "5.625rem"}}/>
            </RadioButton>
        </PetRadioBox>
    )
}

const PetRadioBox = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.69rem;
`;

const RadioButton = styled.div`
    margin: 10px 0;
    ${flex.COLUMN_CENTER};
    gap: 0.56rem;
    padding: 1.25rem 1.9rem 1.75rem 1.9rem;
    background: #FBFBFB;
    border: 1px solid #CBD5E1;
    border-radius: 1.25rem;
`;

const RadioLabel = styled.label`
    ${flex.COLUMN_VERTICAL};
    cursor: pointer;
    ${font.small};
`;

const PetRadioInput = styled.input`
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    &:checked {
        background: none;
    }
    &:checked + ${RadioLabel} {
        background-color: "#000000";
    }
`;

const LabelText = styled.p`
    font-size: 0.75rem;
`;