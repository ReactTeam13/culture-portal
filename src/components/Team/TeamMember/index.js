import React from 'react';
import './index.css';
import TeamAvatar from '../TeamAvatar/index';
import LinkIcon from '../../LinkIcon/index';


function TeamMember({ data }) {
  return (
    <div className="row pr-3 pl-3 text-center">
      <div className="col-lg-6 col-md-8 col-sm-8 col-7 mx-auto p-0">
        <TeamAvatar link={data.links[0].src} src={`https://avatars.githubusercontent.com/${data.githubId}`} />
      </div>
      <div className="w-100 text-center h6">
        <div className=" pt-4 pb-2">
          <h3 className="bold">{data.name}</h3>
        </div>
        <p className="yellow pb-1">{data.position}</p>
        <p className="mx-auto pb-1 max-w-300"><small>{data.contribution}</small></p>
        <div className="pt-3">
          {data.links.map((linkData, i) => (
            <div className="d-inline m-2"><LinkIcon key={i} src={linkData.src} icon={linkData.icon} /></div>
          ))}
        </div>
      </div>
      <div style={{ height: '220px' }} />
    </div>
  );
}

export default TeamMember;
