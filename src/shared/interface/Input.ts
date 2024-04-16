export interface IInput {
    placeholder?: string;
    type?:"text"| "password",
    value: string;
    onChange: (value: string) => void;
    variant?: 'auth' | 'search' 
  }
  