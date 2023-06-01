import { useState } from "react";
import Image from "@/components/Image/Image";
import Icon from "@/components/Icon/Icon";
import Field from "@/components/Field/Field";

type EditProfileProps = {};

const EditProfile = ({}: EditProfileProps) => {
  const [objectURL, setObjectURL] = useState<any>("/images/avatar.jpg");
  const [name, setName] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const handleUpload = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // setImage(file);
      setObjectURL(URL.createObjectURL(file));
    }
  };

  return (
    <form className="" action="" onSubmit={() => console.log("Submit")}>
      <div className="mb-8 h4 md:mb-6">Edit profile</div>
      <div className="flex items-center mb-6">
        <div className="relative flex justify-center items-center shrink-0 w-28 h-28 mr-4 rounded-full overflow-hidden bg-n-2 dark:bg-n-6">
          {objectURL !== null ? (
            <Image
              className="object-cover rounded-full"
              src={objectURL}
              fill
              alt="Avatar"
            />
          ) : (
            <Icon className="w-8 h-8 dark:fill-n-1" name="profile" />
          )}
        </div>
      </div>
      <Field
        className="mb-6"
        label="Username"
        placeholder="Username"
        icon="profile-1"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        required
      />
      <button className="btn-blue w-full">Save changes</button>
    </form>
  );
};

export default EditProfile;
