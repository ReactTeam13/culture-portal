import React from 'react';
import './index.css';
import TeamAvatar from '../TeamAvatar/index';
import LinkIcon from '../../LinkIcon/index';


function TeamMember({ data }) {
  return (
    <div className="row mr-4 ml-4 mt-1 mb-1 text-center">
      <div className="col-lg-6 col-md-9 col-sm-12 mx-auto p-0">
        <TeamAvatar link={data.links[0].src} src={`https://avatars.githubusercontent.com/${data.githubId}`} />
      </div>
      <div className="w-100 text-center h6">
        <div className=" mt-3 mb-2">
          <strong>{data.name}</strong>
        </div>
        <div className="yellow mb-2">{data.position}</div>

        <div className="mx-auto mb-1 max-w-300"><small>{data.contribution}</small></div>
        <div className="m-2">
          {data.links.map((linkData, i) => (
            <LinkIcon key={i} src={linkData.src} icon={linkData.icon} />))}
        </div>
      </div>
      <div style={{ height: '220px' }} />
    </div>
  );
}

export default TeamMember;
