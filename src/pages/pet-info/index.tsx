import React, { useState } from 'react';
import styled from "styled-components"
import font from "@/components/common/generator/font"
import { theme } from "@/styles/theme"
import { useRouter } from 'next/router'

export default function PetInfo() {
    const router = useRouter();
    const { selectedPet } = router.query;

    return (
        <PetInfoPageBox>
            {selectedPet} 반려동물 정보 입력 페이지
        </PetInfoPageBox>
    )
}

const PetInfoPageBox = styled.div`
    ${font.h2};
`;