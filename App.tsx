import './global.css';
import { useColorScheme, View } from 'react-native';
import { MD3DarkTheme, PaperProvider } from 'react-native-paper';
import { temaClaro } from 'themes/TemaClaro';
import { temaOscuro } from 'themes/TemaOscuro';
import Botones from 'components/Botones';
import Formulario from 'components/Formulario';
import Listas from 'screens/Listas';
import Targetas from 'screens/Targetas';


export default function App() {

  const temaActivo = useColorScheme()

  return (
    <PaperProvider theme={temaActivo==="light"? temaClaro : temaOscuro}>  
      <Listas></Listas>
      <Targetas></Targetas>
    </PaperProvider>
  );
}
