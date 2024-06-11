import { css } from "styled-components";

export const fontGenerator = (
  weight: number,
  size: number,
  lineHeight: number,
  spacing: number,
) => css`
  font-weight: ${weight}; // 300(Light), 400(Regular), 500(Bold), 700(Extra Bold)
  font-size: ${size}rem;
  line-height: ${lineHeight}%;
  letter-spacing: ${spacing}rem;
`;

export const font = {
    h1: fontGenerator(800, 3, 100, -0.036),
    h2: fontGenerator(700, 1.875, 120, -0.01406),
    h3: fontGenerator(700, 1.5, 133.3, -0.009),
    h4: fontGenerator(700, 1.25, 140, -0.00625),

    p: fontGenerator(400, 1, 175, 0),
    pbold: fontGenerator(700, 1, 175, 0),

    lead: fontGenerator(400, 1.25, 140, 0),
    large: fontGenerator(700, 1.25, 155, 0),
    small: fontGenerator(400, 1, 100, 0),
    subtitle: fontGenerator(400, 1., 142, 0),
    
    placeholder: fontGenerator(400, 0.875, 171, 0),
};

export default font;