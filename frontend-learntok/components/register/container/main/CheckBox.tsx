type Props = {
  isChecked: boolean;
  setIsChecked: (p: (value: boolean) => boolean) => void;
  id: string;
};

export default function CheckBox({ isChecked, setIsChecked, id }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <div className="container">
        <input
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          type="checkbox"
          id={id}
          style={{ display: "none" }}
        />
        <label htmlFor={id} className="check">
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>
      </div>
      <span className=" text-sm inline-flex gap-1 items-center">
        Remember <span>me</span>
      </span>
    </div>
  );
}
