// import original module declarations
import 'styled-components';
import { DefaultTheme } from 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;


    colors: {
      main: string;
      secondary: string;
    };
  }
}



const myTheme: DefaultTheme = {
  borderRadius: '5px',


  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
};


export { myTheme };