import React, { useState } from 'react';
import styled from "styled-components"
import font from "@/components/common/generator/font"
import { theme } from "@/styles/theme"
import PetRadio from "@/components/landing/PetRadio"
import Link from 'next/link';
import flex from '@/components/common/generator/flex';

export default function Landing() {
    const [selectedPet, setSelectedPet] = useState<string>('');

    return (
        <LandingPageBox>
            <AsideBox>
                <PetRadioBox>
                    <div>
                        펫 보험을 찾을<br />
                        가족을 선택해 주세요.
                    </div>
                    <PetRadio selectedPet={selectedPet} setSelectedPet={setSelectedPet} />
                    <Link href={`/pet-info?selectedPet=${selectedPet}`} passHref>
                        <StyledButton disabled={!selectedPet}>보험 찾으러 가기 →</StyledButton>
                    </Link>
            </PetRadioBox>
            </AsideBox>
        </LandingPageBox>
    )
}

const LandingPageBox = styled.div`

`;

const AsideBox = styled.div`
    ${flex.COLUMN_CENTER};

    padding: 16.5rem 9.6rem;
`;

const PetRadioBox = styled.div`
    ${font.h3};
    ${flex.COLUMN_HORIZONTAL};
    gap: 3.25rem;
`;

const StyledButton = styled.button`
    ${font.small};
    width: 100%;
    background-color: ${theme.slate[900]};
    color: ${theme.base['white']};
    padding: 0.8rem 1rem;
    width: 20.375rem;
    border-radius: 0.375rem;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
    }
`;