import { DefaultTheme } from 'react-native-paper'

export const Colors = {
  // Common
  transparent: 'rgba(0,0,0,0)',
  text: '#3f3f3f',
  tintGrey: '#777b',
  foreground: '#FFFFFF',
  background: '#f5f5f5',
  success: '#28a745',
  error: '#dc3545',

  // App Specific
  primary: 'teal',
  secondary: 'green',
}

export const PaperTheme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.secondary,
    text: Colors.text,
  },
}
