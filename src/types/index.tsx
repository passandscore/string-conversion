export type InfoDialog = {
  title: string;
  description: string;
  types: string;
  codeblock: string;
};

export type ConversionTools = {
  title: string;
  value: string;
  setValue: (values: string) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  result: string;
  setResult: (result: string) => void;
  submit: boolean;
  placeholder: string;
  source: string;
  info: InfoDialog;
};
