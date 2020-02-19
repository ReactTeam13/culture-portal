import React from 'react';
import './index.css';
import TeamAvatar from '../TeamAvatar/index';
import LinkIcon from '../../LinkIcon/index';


function TeamMember({ data }) {
  return (
    <div className="row m-4 text-center">
      <div className="col-lg-5 col-md-9 col-sm-11 mx-auto">
        <TeamAvatar link={data.links[0].src} src={`https://avatars.githubusercontent.com/${data.githubId}`} />
      </div>
      <div className="w-100 m-3 text-center">
        <div className="m-2">
          <strong>{data.name}</strong>
        </div>
        <div className="yellow">{data.position}</div>
        <div className="w-50 mx-auto"><small>{data.contribution}</small></div>
        <div className="m-2">
          {data.links.map((linkData, i) => (
            <LinkIcon key={i} src={linkData.src} icon={linkData.icon} />))}
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
