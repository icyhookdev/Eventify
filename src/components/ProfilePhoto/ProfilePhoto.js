import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

import { usersWithAuth } from '../../api/users';
import classes from './ProfilePhoto.module.css';
import cameraIcon from '../../assets/icons/camera.svg';
import Loading from '../Loading/Loading';
import profileImg from '../../assets/img/profileImg.png';

const ProfilePhoto = ({ profilePic, setUser }) => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onDropHandler = file => setFile(file[0]);
  const onRemoveImgHandler = () => setFile(null);

  const onUpdateProfileImg = async () => {
    const token = localStorage.getItem('token');
    const uid = localStorage.getItem('user');
    setIsLoading(true);
    const form = new FormData();
    form.append('image', file, file.name);
    try {
      const res = await usersWithAuth(token).put(`/avatar/${uid}`, form);
      console.log(res);
      setIsLoading(false);
      setFile(null);
      setUser();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }

    // this.props.uploadProfileImage(img, fileName);
  };
  const onDisplayLabelAction = () =>
    file && (
      <div>
        <label onClick={onUpdateProfileImg} className={classes.green} />
        <label onClick={onRemoveImgHandler} className={classes.red} />
      </div>
    );

  return (
    <div className={classes.ProfilePhoto}>
      {isLoading && <Loading msg="Subiendo Imagen" />}

      <Dropzone className={classes.drag} onDrop={onDropHandler}>
        {!file && (
          <img
            className={classes.userImg}
            src={profilePic || profileImg}
            alt="404"
          />
        )}
        {file && (
          <div className={classes.img_preview_container}>
            <img src={file.preview} className={classes.img_preview} alt="404" />
          </div>
        )}
        <div className={classes.info}>
          Cambiar
          <img src={cameraIcon} alt="404" />
        </div>
      </Dropzone>
      {onDisplayLabelAction()}
    </div>
  );
};

export default ProfilePhoto;
