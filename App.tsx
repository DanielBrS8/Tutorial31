import './global.css';
import { useColorScheme, View } from 'react-native';
import { MD3DarkTheme, PaperProvider } from 'react-native-paper';
import { temaClaro } from 'themes/TemaClaro';
import { temaOscuro } from 'themes/TemaOscuro';
import Botones from 'components/Botones';
import Formulario from 'components/Formulario';


export default function App() {

  const temaActivo = useColorScheme()

  return (
    <PaperProvider theme={temaActivo==="light"? temaClaro : temaOscuro}>

      
      <Botones></Botones>

      <Formulario></Formulario>


    </PaperProvider>
  );
}
