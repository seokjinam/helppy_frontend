import styled from "styled-components"
import font from "@/components/common/generator/font"
import { theme } from "@/styles/theme"
import PetRadio from "@/components/landing/PetRadio"

export default function Landing() {
  return (
      <LandingPageBox>
          랜딩 페이지
          <PetRadio />
      </LandingPageBox>
  )
}

const LandingPageBox = styled.div`
    ${font.h2};
`;