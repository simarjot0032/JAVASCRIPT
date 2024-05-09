interface Props {
  btnClassName: string;
  buttonText: string;
}
export default function ButtonComponents({ btnClassName, buttonText }: Props) {
  return (
    <>
      <button className={btnClassName}>{buttonText}</button>
    </>
  );
}
