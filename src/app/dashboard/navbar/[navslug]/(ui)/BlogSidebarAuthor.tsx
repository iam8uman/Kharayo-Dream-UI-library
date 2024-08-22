import React from 'react';
import Image from 'next/image';

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface SidebarAuthorProps {
  imageUrl: string;
  name: string;
  description: string;
  socialLinks: SocialLink[];
}

const SidebarAuthor: React.FC<SidebarAuthorProps> = ({ 
  imageUrl, 
  name, 
  description, 
  socialLinks 
}) => {
  const SocialIcon: React.FC<{href: string; ariaLabel: string; children: React.ReactNode}> = ({ href, ariaLabel, children }) => (
    <li>
      <a 
        href={href} 
        title="" 
        className="inline-flex items-center justify-center w-10 h-10 text-white transition-all duration-200 bg-gray-900 rounded-md hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-gray-900" 
        role="button"
      >
        <span className="sr-only">{ariaLabel}</span>
        {children}
      </a>
    </li>
  );

  return (
    <div className="max-w-md lg:col-span-2 lg:max-w-none">
      <Image 
        className="object-cover w-full h-auto rounded-lg" 
        src={imageUrl} 
        alt={`${name}'s profile picture`}
        width={400}
        height={400}
      />
      <p className="mt-6 text-lg font-bold text-gray-900 dark:text-slate-100">{name}</p>
      <p className="mt-4 text-base font-normal leading-7 text-gray-500 dark:text-slate-300">{description}</p>

      <hr className="mt-6 border-gray-200" />
      <p className="mt-6 text-lg font-bold text-gray-900 dark:text-slate-100">Connect me on:</p>
      <ul className="flex items-center mt-4 space-x-3">
        {socialLinks.map((link, index) => (
          <SocialIcon key={index} href={link.href} ariaLabel={link.label}>
            {link.icon}
          </SocialIcon>
        ))}
      </ul>
    </div>
  );
};

export default SidebarAuthor;