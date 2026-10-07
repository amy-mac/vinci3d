import { useLoader } from '@react-three/fiber';
import { useScene } from '../Context/useScene'
import { TextureLoader } from 'three';
import barkAlbedo from '../assets/bark1-albedo.png';

const RADIUS = 6;
const WIDTH = 10;
const HEIGHT = 4;

export default function Pumpkin() {
  const { recordToShow } = useScene();
  const colorMap = useLoader(TextureLoader, barkAlbedo);

  const pumpkinState = recordToShow?.pumpkinState;

  if (!pumpkinState) {
    return null;
  }

  return (
    <mesh visible position={[0, 1, 0]}>
      <sphereGeometry args={[HEIGHT, WIDTH, RADIUS]} />
      <meshStandardMaterial color={pumpkinState.color} map={colorMap} />
    </mesh>
  )
}
