import React from 'react';
import './index.css';
import TeamAvatar from '../TeamAvatar/index';
import LinkIcon from '../../LinkIcon/index';


function TeamMember({ data }) {
  return (
    <div className="row pr-4 pl-4 pt-1 pb-1 text-center">
      <div className="col-lg-6 col-md-8 col-sm-8 col-6 mx-auto p-0">
        <TeamAvatar link={data.links[0].src} src={`https://avatars.githubusercontent.com/${data.githubId}`} />
      </div>
      <div className="w-100 text-center h6">
        <div className=" pt-3 pb-2">
          <strong>{data.name}</strong>
        </div>
        <div className="yellow pb-2">{data.position}</div>
        <div className="mx-auto pb-1 max-w-300"><small>{data.contribution}</small></div>
        <div className="p-2">
          {data.links.map((linkData, i) => (
            <LinkIcon key={i} src={linkData.src} icon={linkData.icon} />))}
        </div>
      </div>
      <div style={{ height: '220px' }} />
    </div>
  );
}

export default TeamMember;
