import React from 'react';
import { IconButton } from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import PlayIcon from '@material-ui/icons/PlayArrowOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const IconButtonBar = ({
  style = {
    fontSize: '20px',
    color: '#a8a8a8',
  },
  links = {},
}) => {
  const IconPicker = (icon) => {
    switch (icon) {
      case 'post':
        return <DescriptionIcon style={style} />;
      case 'demo':
        return <PlayIcon style={style} />;
      case 'github':
        return <GitHubIcon style={style} />;
      case 'googlePlay':
        return <AndroidIcon style={style} />;
      case 'appStore':
        return <AppleIcon style={style} />;
      case 'email':
        return <EmailIcon style={style} />;
      case 'linkedIn':
        return <LinkedInIcon style={style} />;
      case 'instagram':
        return <InstagramIcon style={style} />;
      default: 
        return <></>
    }
  };

  return (
    <>
      {Object.keys(links).map((link, index) => {
        return (
          links[link] && (
            <IconButton key={index} size="small" href={`${link === 'email' ? `mailto:` : ``}${links[link]}`}>
              {IconPicker(link)}
            </IconButton>
          )
        );
      })}
    </>
  );
};

export default IconButtonBar;
