import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  saveMonster: (e: React.FormEvent, formData: IMonster | any) => void;
};

const CreateMonster: React.FC<Props> = ({ saveMonster }) => {
  const { user } = useAuth0();

  const [formData, setFormData] = useState<IMonster | {}>({
    ownerId: user?.sub,
  });

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form onSubmit={(e) => saveMonster(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleForm} type="text" id="name" />
        </div>
        {/* <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div> */}
      </div>
      <button disabled={formData === undefined ? true : false}>
        Create Monster
      </button>
    </form>
  );
};

export default CreateMonster;
