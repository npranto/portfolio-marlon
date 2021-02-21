import React from 'react';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaRedditAlien,
  FaGithub,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
  FaTumblr,
  FaMediumM,
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import Button from '../Button/Button';
import './SocialItem.css';

const SOCIALS = [
  { name: 'LinkedIn', component: FaLinkedinIn },
  { name: 'Facebook', component: FaFacebookF },
  { name: 'Twitter', component: FaTwitter },
  { name: 'Reddit', component: FaRedditAlien },
  { name: 'GitHub', component: FaGithub },
  { name: 'Youtube', component: FaYoutube },
  { name: 'Pinterest', component: FaPinterest },
  { name: 'Instagram', component: FaInstagram },
  { name: 'Tumbler', component: FaTumblr },
  { name: 'Medium', component: FaMediumM },
  { name: 'TikTok', component: SiTiktok },
];

const getSize = (props) => {
  if (props.xm) return '1em';
  if (props.sm) return '1.5em';
  if (props.md) return '2em';
  if (props.lg) return '2.5em';
  if (props.xl) return '3em';
  return '1.5em'; // fallback default size
};

export default function SocialItem(props) {
  const { name = SOCIALS[0].name, className = '', url } = props;
  const social = SOCIALS.find(
    (s) => s.name.toLocaleLowerCase() === name.toLowerCase(),
  );

  if (!social) {
    throw new Error('Please provide a valid social `name`');
  }

  const { name: title, component: SocialIcon } = social;
  const customClassName = `
    SocialItem
    ${className}
    ${url ? 'clickable' : ''}
  `;
  const size = getSize(props);

  console.log({ props });

  if (url) {
    return (
      <Button
        link
        resetLinkStyle
        className="SocialItem link"
        href={url}
        target="_blank"
      >
        <SocialIcon
          title={title}
          size={size}
          {...props}
          className={customClassName}
        />
      </Button>
    );
  }
  return (
    <SocialIcon
      title={title}
      size={size}
      {...props}
      className={customClassName}
    />
  );
}
