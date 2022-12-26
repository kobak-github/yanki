import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <div className="content__items">
    <ContentLoader
      speed={2}
      width={310}
      height={465}
      viewBox="0 0 310 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="90" y="375" rx="0" ry="0" width="130" height="19" />
      <rect x="0" y="0" rx="0" ry="0" width="310" height="360" />
      <rect x="117" y="399" rx="0" ry="0" width="75" height="18" />
      <rect x="90" y="423" rx="0" ry="0" width="130" height="19" />
      <circle cx="154" cy="456" r="8" />
      <circle cx="128" cy="456" r="8" />
      <circle cx="180" cy="456" r="8" />
    </ContentLoader>
  </div>
);

export default Skeleton;
