import { useCallback, useState } from 'react';
import { useMyPageContext } from '../MyPageFetcher/MyPageContext';
import useSave from './useSave';

export default function useEdit() {
  const { myPageData, setMyPageData } = useMyPageContext();
  const { profile, nickname, background } = myPageData;
  const { handlePostImage } = useSave();
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [backgroundFile, setBackgroundFile] = useState<File | null>(null);
  const [name, setName] = useState(nickname);

  const handleProfileFileChange = useCallback(
    (newFile: File | null) => {
      setProfileFile(newFile);
      if (newFile) {
        handlePostImage(newFile, 'profile');
      }
    },
    [handlePostImage],
  );

  const handleNameChange = useCallback(
    (newName: string) => {
      setName(newName);
      setMyPageData((prevData) => ({
        ...prevData,
        nickname: newName,
      }));
    },
    [setMyPageData],
  );

  const handleBackgroundFileChange = useCallback(
    (newFile: File | null) => {
      setBackgroundFile(newFile);
      if (newFile) {
        handlePostImage(newFile, 'background');
      }
    },
    [handlePostImage],
  );

  return {
    profileFile,
    profile,
    name,
    background,
    backgroundFile,
    handleProfileFileChange,
    handleNameChange,
    handleBackgroundFileChange,
  };
}
