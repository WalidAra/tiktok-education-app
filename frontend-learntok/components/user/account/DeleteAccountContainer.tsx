import ColorSync from "@/components/general/ColorSync";
import ConfirmDeleteAccount from "./ConfirmDeleteAccount";

const DeleteAccountContainer = () => {
  return (
    <>
      <ColorSync
        key={undefined}
        onDark="bg-[#171717]"
        onWhite=""
        style="w-full p-5"
      >
        <div className="flex flex-col gap-5">
          <h1 className="capitalize text-xl font-medium">profile details</h1>

          <div className="bg-[#225033] text-green-500 p-3 text-lg rounded">
            <h1 className="font-semibold">
              Are you sure you want to delete your account?
            </h1>
            <p className="text-sm font-medium">
              Once you delete your account there is no turning back . Please be
              certain
            </p>
          </div>
          <ConfirmDeleteAccount />
        </div>
      </ColorSync>
    </>
  );
};

export default DeleteAccountContainer;
