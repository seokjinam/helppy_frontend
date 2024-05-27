import styled from "styled-components"
import font from "@/components/common/generator/font"
import { theme } from "@/styles/theme"

export default function Landing() {
  return (
      <LandingPageBox>
          랜딩 페이지
      </LandingPageBox>
  )
}

const LandingPageBox = styled.div`
    ${font.h2};
    background-color: ${theme.primary[300]};
`;