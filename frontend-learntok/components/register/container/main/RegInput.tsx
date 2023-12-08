type Props = {
  label: string;
  placeholder: string;
  value: string;
  setValue(value: string): void;
  style:string;
};

const RegInput = ({ label, placeholder, setValue, value ,style }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white  text-sm" htmlFor="">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="email"
        placeholder={placeholder}
        className="rounded py-2 px-4 bg-primaryDark w-full focus:border-main duration-150 border border-solid border-transparent"
      />
    </div>
  );
};

export default RegInput;
