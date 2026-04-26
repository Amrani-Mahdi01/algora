import { CSSProperties } from "react";

interface ColorBendsProps {
  className?: string;
  style?: CSSProperties;
  colors?: string[];
  transparent?: boolean;
  rotation?: number;
  speed?: number;
  autoRotate?: number;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  noise?: number;
  iterations?: number;
  intensity?: number;
  bandWidth?: number;
}

export default function ColorBends(props: ColorBendsProps): JSX.Element;
