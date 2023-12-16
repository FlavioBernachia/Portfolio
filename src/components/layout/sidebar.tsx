import React from 'react';
import { Home as HomeIcon, Work as WorkIcon, Mail as MailIcon, LinkedIn, GitHub } from '@mui/icons-material';

const sidebarData = [
  { label: "Home", icon: <HomeIcon className='sidebar-icon'/>,},
  { label: "Proyectos", icon: <WorkIcon className='sidebar-icon'/>,},
  { label: "Contacto", icon: <MailIcon className='sidebar-icon'/>,},
  { label: "LinkedIn", icon: <LinkedIn className='sidebar-icon'/>, link: "https://www.linkedin.com/in/tu-linkedin" },
  { label: "GitHub", icon: <GitHub className='sidebar-icon'/>, link: "https://github.com/tu-usuario" }
];

export const Sidebar: React.FC = () => {
  return (
    <div className='sidebar'>
    <nav className='sidebar-items'>
      <ul className='sidebar-ul'>
        {sidebarData.map((item, index) => (
          <li key={index} className='sidebar-li'>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className='sidebar-a'>
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
};